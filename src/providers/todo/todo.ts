import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map"


/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private notes = [
      {
        "callerName": "Marty McFly",
        "phone": "(555) 212-1234",
        "logTime": "5/22/ 6:30 AM",
        "duration": "13 minutes",
        "note": ""
      }
    ];

  constructor(public http: Http) {
    
  }

  getNotes(){
    return this.notes;
  }

  addNote(note){
    this.notes.push(note);
  }
}
