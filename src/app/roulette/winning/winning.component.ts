import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-winning',
  templateUrl: './winning.component.html',
  styleUrls: ['./winning.component.css']
})
export class WinningComponent implements OnInit {
@Input('winingMsg') winingMsg;
@Output() reset : EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * resest game on users selection
   */
  resetGame(){
    this.reset.emit(true);
  }

  /**
   * force reload
   */
  refreshGame(){
    window.location.reload(true);
  }
}
