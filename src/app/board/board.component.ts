import { Component } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { GameService } from "../game/game.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {
  public winner = null;
  public nextPlayer: string;
  public squares = Array(9).fill(null);
  public history: any[] = [];

  constructor(private gameService: GameService) {
    //who start?
    this.nextPlayer = this.gameService.randomPlayer();

    //move#0 , square 9 null
    this.snapShot();
  }

  //who is next turn?
  playerTurn() {
    this.nextPlayer = (this.nextPlayer == "X" ? "O" : "X");

    return this.nextPlayer;
  }

  //create history[]
  snapShot() {

    // square[] is 9 null
    // add square[] to copyOf
    const copyOf = [...this.squares];

    // const copyOf = [];
    /* Method #1
    for (let i = 0; i < 9; i++) {
      copyOf.push(this.squares[i]);
    } 
    */
    /* Method #2
    for (const i of this.squares) {
      copyOf.push(i);
    }
    */

    //item is object{player,squares}
    const item = { player: this.nextPlayer, squares: copyOf };
    //add item to history
    this.history.push(item);
  }

  onClicked(id: number) {
    // don't do anything is someone is winner
    if (this.winner) {
      return;
    }

    // click pre last history
    //history.length > getTurn() --> 1 turn
    if (this.history.length != (this.gameService.getTurn() + 1)) {
      const end = this.gameService.getTurn() + 1;
      //slice item in history 
      this.history = this.history.slice(0, end);
    }

    //sqvalue = squares[id]
    this.squares[id] = this.nextPlayer;

    // winner = X/O or null
    this.winner = this.gameService.calculateWinner(this.squares);

    if (this.winner == null) {
      this.playerTurn();
      //increase turn
      this.gameService.gameTurn();
    }

    this.snapShot();

    console.log("history", this.history.length);
    console.log("getTurn",this.gameService.getTurn());
    
    
  }

/*
  undo() {
    const last = this.history.pop();

    if (last != undefined) {
      this.squares = last.squares;
      this.nextPlayer = last.player;
    }
  }
*/

  selectHistory(i) {
    this.squares = [...this.history[i].squares];
    this.nextPlayer = this.history[i].player;
    this.gameService.setTurn(i);
  }
}

