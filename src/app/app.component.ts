import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      //initilise app at start of application, usually we would do this with REST APIs
      //*************** need to add API Key and AuthDomain from firebase in here removed as pushed onto remote github */
      
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
