import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from "./board/board.component";
import { GameService } from './game.service';
import { SquareComponent } from './square/square.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, BoardComponent, SquareComponent]
})
export class AppComponent {
    title = 'ticapp';
  constructor(public gameService: GameService){ }
}
