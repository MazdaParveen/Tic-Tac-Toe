import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';
import { BrowserModule } from '@angular/platform-browser';
import { SquareComponent } from "../square/square.component";

@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.css',
    imports: [CommonModule, SquareComponent]
})
export class BoardComponent implements OnInit {
   constructor(public gameService: GameService){}

   ngOnInit(): void {
       
   }
}
