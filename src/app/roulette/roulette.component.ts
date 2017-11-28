import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

declare let $:any;
@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {

  dummyText = "";
  blockedAmount =0;
  betAmount = [0,0,0,0,0,0,0,0];
  reset : boolean;
  errorPopUp : boolean;
  user : any;
  winingMsg = {
    status : "YOU WON!!",
    msg1 : "The Roulette Result Number is " ,
    msg2 : "You Won Rs "
  };

  constructor(private request : GameService) {  }

  ngOnInit() {
   this.resetGame(true);

  }

  setPlayStatus(status : boolean){
    if (status){
      this.startPlay();
    }
  }

  refreshGame(){
    window.location.reload(true);
  }

  startPlay(){
    for (var i=0;i<this.betAmount.length;i++){
      this.blockedAmount+=this.betAmount[i];
    }
    this.blockService();
  }

  resetGame(status : boolean){
    this.reset = status;
    if(this.reset === true){
      let obj = {
        uniqueId : ""
      };
      this.user = this.request.getData(obj)
        .subscribe(data => {
          this.user = data;
          this.dummyText = "Welcome " + this.user.name + "!! You have Rs " + this.user.balance;
        });
      this.betAmount.fill(0);
    }
  }

  blockService(){
    console.log(this.blockedAmount);
    console.log(this.user.balance);
      if(this.blockedAmount <= this.user.balance){
         /* this.user.blockedAmount = this.blockedAmount;*/
          let betObj = this.createBetObject();

          this.request.start(betObj)
            .subscribe(data => {
              console.log(data);
              this.user = data.customer;
             if(data.winningAmount > 0){
                this.winingMsg = {
                  status : "YOU WON!!",
                  msg1 : "The Roulette Result Number is " + data.luckyNum,
                  msg2 : "You Won Rs " + data.winningAmount
                }
             }
             else{
               this.winingMsg = {
                 status : "YOU LOSE!!",
                 msg1 : "The Roulette Result Number is " + data.winningAmount,
                 msg2 : ""
               }
             }
              $('#winningModel').modal();
            });
          this.blockedAmount = 0;
      }
      else{
        console.log("When Error");
        console.log(this.blockedAmount)
        console.log(this.user.balance);
        this.errorPopUp = true;
        $('#errorModel').modal();
      }
  }

  createBetObject(){
    let betObj = {
      first12 : this.betAmount[0],
      second12 : this.betAmount[1],
      third12 : this.betAmount[2],
      zero : this.betAmount[3],
      first18 : this.betAmount[4],
      second18 : this.betAmount[5],
      even : this.betAmount[6],
      odd: this.betAmount[7],
      uniqueId : this.user.uniqueId
    }
    return betObj;
  }


}
