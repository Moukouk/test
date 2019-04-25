import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {
    const config = {
      apiKey: 'AIzaSyAStsoHebLSGWW0QKm-MuomKdLAabJnkGs',
      authDomain: 'masuperagence-921c4.firebaseapp.com',
      databaseURL: 'https://masuperagence-921c4.firebaseio.com',
      projectId: 'masuperagence-921c4',
      storageBucket: 'masuperagence-921c4.appspot.com',
      messagingSenderId: '757675834303'
    };
    firebase.initializeApp(config);
  }
}
