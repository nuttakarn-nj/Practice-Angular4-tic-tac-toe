import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SquareComponent } from "./square/square.component";
import { BoardComponent } from "./board/board.component";

import { GameService } from "./game/game.service";

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
