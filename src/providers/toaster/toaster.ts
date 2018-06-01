import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular'

/*
  Generated class for the ToasterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToasterProvider {

  constructor(private toastCtrl: ToastController) {
    console.log('Hello ToasterProvider Provider');
  }

  presentToast(message, position, cssclass) {
      let toast = this.toastCtrl.create({
          message: message,
          closeButtonText: "OK",
          showCloseButton: true,
          cssClass: cssclass,
          position: position
      });
      toast.present();
  }
  
  presentSimpleToast(message, position) {
      let toast = this.toastCtrl.create({
          message: message,
          duration: 3000,
          position: position
      });
      toast.present();
  }

}
