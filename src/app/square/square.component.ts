import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';
@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent implements OnInit {
 constructor( public gameService: GameService ){}

 @Input()square: any;


ngOnInit(): void{
}
changePlayer(){
  this.gameService.isGameRunning = true;

  if(this.gameService.isGameRunning && this.square.state === null){
    this.square.state = this.gameService.activePlayer;
    this.gameService.changePlayerTurn(this.square);
  }
}

}