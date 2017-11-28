import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
@Output() reset : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * resets game on users selection
   */
  resetGame(){
    this.reset.emit(true);
  }

}
