import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AlertProvider {

  constructor(public http: Http) {

  }

  showAlert(page){
    return page.alertController.create({
      title: "Add note",
      message: "Add a note for this call.",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Save",
          handler: (inputData) => {
            //let noteText;
            //noteText = inputData.addTodoInput;
            //page.todoProvider.addNote(noteText);
          }
        }
      ]
    });
  }
}
