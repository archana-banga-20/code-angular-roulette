import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";

const header = {headers : new Headers({'Content-type' : 'application/json'})}
const BASE_URL = "https://roulettegame.herokuapp.com/getcustomer";
const BASE_START_URL = "https://roulettegame.herokuapp.com/startGame";

@Injectable()
export class GameService {

customer_id : string;

  constructor(private http:Http) { }

  getData(data){
    if(data.uniqueId == "")
    {
      data.uniqueId = this.customer_id;
    }

     return this.http.post(BASE_URL, data, header)
        .map(res => res.json());
  }

  setId(id){
    this.customer_id = id;
  }

  start(data){
    console.log(data);
     return this.http.post(BASE_START_URL, data, header)
      .map(res => res.json());
  }


}
