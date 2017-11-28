import { Injectable } from '@angular/core';
import {CanActivate,Router} from "@angular/router";
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {GameService} from "./game.service";

const header = {headers : new Headers({'Content-type' : 'application/json'})}

@Injectable()
export class CanActivateService implements CanActivate{

  id:string;
  status : boolean;
  user : Object;

  constructor(private http:Http,private route : Router,private gameService : GameService) {  }

  /**
   *
   * @returns component can be activated or not
   */
  canActivate():boolean{
    console.log("entered can activate");
    if (this.status){
      return true;
    }
    return false;
  }

  /**
   *
   * @param user
   * requesting service to get verified user
   */
  verify(data){
    this.gameService.getData(data)
      .subscribe(data => {
        this.user = data;
        console.log(data);
        console.log(typeof data);
        console.log(this.user);
        this.gameService.setId(data.uniqueId);
        this.status = true;
      });
  }


}
