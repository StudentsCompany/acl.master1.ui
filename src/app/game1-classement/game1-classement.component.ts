import { Component } from '@angular/core';
import { UIService } from '../service/ui-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game1-classement',
  templateUrl: './game1-classement.component.html',
  styleUrls: ['./game1-classement.component.scss'],
})
export class Game1ClassementComponent {
  public displayedColumns: string[] = ['position', 'username', 'score'];
  dataSource = ELEMENT_DATA;

  constructor(private uiService : UIService, private route: ActivatedRoute) {}

  navigateTo(path:string) : void {
    this.uiService.navigateTo(path, this.route);
  }
}

export interface ClassementJoueur {
  position: number;
  username: string;
  score: number;
}

const ELEMENT_DATA: ClassementJoueur[] = [
  {position: 1, username: 'Hydrogen', score: 100},
  {position: 2, username: 'Helium', score: 90},
  {position: 3, username: 'Lithium', score: 80},
  {position: 4, username: 'Beryllium', score: 70},
  {position: 5, username: 'Boron', score: 60},
  {position: 6, username: 'Carbon', score: 50},
  {position: 7, username: 'Nitrogen', score: 30},
  {position: 8, username: 'Oxygen', score: 20},
  {position: 9, username: 'Fluorine', score: 10},
  {position: 10, username: 'Neon', score: 0},
];
