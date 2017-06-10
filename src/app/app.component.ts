import { Component } from '@angular/core';
import Game from '../game/Game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  ngOnInit() {
    console.log('hola');
    const game: Game = new Game();
    game.init();
  }
}
