import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BoardComponent } from "../board/board.component";

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent {
  @Input()
  sqvalue: string;

  //id is Input property
  @Input()
  id: string;

  //onClicked is Output property (square send [id] out to board)
  @Output()
  onClicked = new EventEmitter<string>();

  constructor() { }

  //onHandleClick(id: string, value: string)

  onHandleClick(id: string) {

    //not click same button
    if (this.sqvalue == null) {
      this.onClicked.emit(id);
    } else {
      console.log("Already Clicked");
    }
  }
}