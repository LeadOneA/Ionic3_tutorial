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
  private notes = ["Adam call for ...", "Emilia ask for hangout."];

  constructor(public http: Http) {
    
  }

  getNotes(){
    return this.notes;
  }

  addNote(note){
    this.notes.push(note);
  }
}
