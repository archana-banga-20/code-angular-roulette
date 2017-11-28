import { Component, OnInit} from '@angular/core';
import {CanActivateService} from "../can-activate.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  error : string;
  constructor(private activate : CanActivateService) {
  }

  /**
   *
   * @param unique_id passes by UI
   * requests service to verfify users id
   */
  verifyId(unique_id){
  console.log(unique_id);
    let obj = {
      uniqueId : unique_id
    };
    console.log(obj);
    this.activate.verify(obj);
  }



  ngOnInit() {
  }

}
