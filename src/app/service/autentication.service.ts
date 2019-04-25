import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AutenticationService {
  private Connected = new BehaviorSubject<boolean>(false );
  IsConnected = this.Connected.asObservable();
  SatutsConnexion(statut: boolean) {
    this.Connected.next(statut);
  }
  constructor(private http: HttpClient ) { }
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
            console.log('Connecté');
            this. SatutsConnexion(true);
          },
          (error) => {
            reject(error);
            console.log('Non Connecté');
          }
        );
      }
    );
  }
  signOutUser() {
    //firebase.auth().signOut();
    //console.log('Déconnecté');
    //http://localhost/AndroidPHP/urlsImages.php?variableget=9
    this.http.get('http://localhost:3000/todos/').subscribe(
     (res) => {
       var Data=res["data"];
       console.log(Data);
      }); 

      this. SatutsConnexion(false);
  }
}
