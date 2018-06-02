import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
declare var cordova: any;

@Injectable()
export class NotificationsProvider {

  constructor(public http: Http) {

  }

  show(page, title, text){
    cordova.plugins.notification.local.schedule({
      title: title,
      text: text,
      actions: [{ id: 'yes', title: 'Yes' },{ id: 'no', title: 'No' }],
      foreground: true
    });
    cordova.plugins.notification.local.on('yes', function (notification, eopts) {
      let noteText;
      page.todoProvider.addNote({
        "callerName": "Jack Black",
        "phone": "(555) 260-1532",
        "logTime": "5/23/ 4:30 PM",
        "duration": "1 hour 33 minutes",
        "note": ""
      });
    });
    cordova.plugins.notification.local.on('no', function (notification, eopts) {
      // DO SOMETHING
    });/**/
  }
}