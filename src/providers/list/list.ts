import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map"

@Injectable()
export class ListProvider {
  private calls = [];

  constructor(public http: Http) {
    
  }

  getCalls(){
    return this.calls;
  }

  addCall(todo){
    this.calls.push(todo);
  }
}