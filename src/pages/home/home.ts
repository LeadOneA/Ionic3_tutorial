import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { ListProvider } from "../../providers/list/list";
import { TodoProvider } from "../../providers/todo/todo";
import { NotificationsProvider } from "../../providers/notifications/notifications";
import { AlertProvider } from "../../providers/alert/alert";
import { ToasterProvider } from "../../providers/toaster/toaster";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
    private notificationsProvider: NotificationsProvider, 
    private listProvider: ListProvider, 
    private todoProvider: TodoProvider, 
    private alertProvider: AlertProvider,
    private toasterProvider: ToasterProvider,
    public navCtrl: NavController, 
    public platform: Platform, 
    private alertController: AlertController ) {

  }

  AddNoteAlert(){
    this.alertProvider.showAlert(this).present();
  }

  showNotification(){
    this.notificationsProvider.show(this, "Incoming Call", "Jack Black - (555) 260-1532");
    this.toasterProvider.presentSimpleToast('{ CallerId: "(555) 260-1532" }',"bottom")
  }
}
