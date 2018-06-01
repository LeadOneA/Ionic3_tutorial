import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
declare var cordova: any;

@Injectable()
export class NotificationsProvider {

  constructor(public http: Http) {

  }

  show(title, text){
    cordova.plugins.notification.local.schedule({
      title: title,
      text: text,
      actions: [{ id: 'yes', title: 'Yes' },{ id: 'no', title: 'No' }],
      foreground: true
    });
    cordova.plugins.notification.local.on('yes', function (notification, eopts) {
      // DO SOMETHING
    });
    cordova.plugins.notification.local.on('no', function (notification, eopts) {
      // DO SOMETHING
    });
  }
}