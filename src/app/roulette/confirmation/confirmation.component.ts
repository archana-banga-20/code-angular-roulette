import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
@Output() start : EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * starts game on users confirmation
   */
  startPlay(){
    this.start.emit(true);
  }

}
