import { Injectable } from "@angular/core";

@Injectable()
export class DataService{
  user = {
    name : "Foo"
  }
  getName(){
    return this.user;
  }
}
