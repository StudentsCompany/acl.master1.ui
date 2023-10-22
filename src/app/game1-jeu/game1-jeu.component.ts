import { Component } from '@angular/core';
import { UIService } from '../service/ui-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game1-jeu',
  templateUrl: './game1-jeu.component.html',
  styleUrls: ['./game1-jeu.component.scss']
})
export class Game1JeuComponent {
  score:number = 21;
  tour:number = 3;

  constructor(private uiService : UIService, private route: ActivatedRoute) {}

  navigateTo(path:string) : void {
    this.uiService.navigateTo(path, this.route);
  }

}
