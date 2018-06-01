import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform) {
    
    this.platform.ready().then(() => {
      cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        actions: [{ id: 'yes', title: 'Yes' },{ id: 'no', title: 'No' }],
        foreground: true
      })
      cordova.plugins.notification.local.on('yes', function (notification, eopts) {
        console.log("Le dio clic a Yes")
      })
      cordova.plugins.notification.local.on('no', function (notification, eopts) {
        console.log("Le dio clic a No")
      })
    })
  }
}
