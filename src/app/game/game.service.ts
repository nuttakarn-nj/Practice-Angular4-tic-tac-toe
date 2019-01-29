import { Injectable } from '@angular/core';


@Injectable()
export class GameService {
  public turnCount = 0;
  public player: string;

  //only integer
  public random: any = (Math.random() * 10).toFixed(0);

  randomPlayer() {
    if ((this.random % 2) == 0) {
      this.player = "X";
    }
    else {
      this.player = "O";
    }

    return this.player;
  }

  //increase turn
  gameTurn() {
    return this.turnCount++;
  }

  //turn = i
  setTurn(turn) {
    this.turnCount = turn;
  }

  getTurn() {
    return this.turnCount;
  }

  calculateWinner(squares: string[]) {
    const lines = [
      //horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      //vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      //cross
      [0, 4, 8],
      [2, 4, 6],
    ];

    //win 8 case
    for (let i = 0; i < lines.length; i++) {

      //array variable
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // square[0] = X  --> X is winner
        return squares[a];
      }
    }

    // not have a winner
    return null;
  }

}