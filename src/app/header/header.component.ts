import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import * as firebase from 'firebase';
import { AutenticationService } from '../service/autentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean ;
  connected: boolean;

  constructor(private autenticationService: AutenticationService) { }
  ngOnInit() {
    this.autenticationService.IsConnected.subscribe(message => this.connected = message);
    /*firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
            this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    );*/
  }
  onSignOut() {
   this.autenticationService.signOutUser();
   console.log('ok');
  }

}
