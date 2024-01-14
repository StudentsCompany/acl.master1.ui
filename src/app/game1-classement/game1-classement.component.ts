import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UIService } from '../service/ui-service';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../service/game.service';
import { map } from 'rxjs/operators';
import { GameDTO } from "src/app/model/game.model.dto";
import {Sort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-game1-classement',
  templateUrl: './game1-classement.component.html',
  styleUrls: ['./game1-classement.component.scss'],
})
export class Game1ClassementComponent implements AfterViewInit {
  public displayedColumns: string[] = ['position', 'playerId', 'state', 'score'];
  dataSource !: GameDTO[];

  constructor(private uiService : UIService, private route: ActivatedRoute, private gameService : GameService) {}

  ngAfterViewInit() {
    this.gameService.getAll().pipe(
        map((res) => {
        this.dataSource = res;
      })).subscribe();
  }

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = data;
      return;
    }

    this.dataSource = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'score':
          return compare(a.score, b.score, isAsc);
          break;
        default:
          return 0;
      }
    });
  }

  /* ngAfterViewInit(): void
    {
      this.service.getEmployees().subscribe(employees => {
        this.dataSource = new MatTableDataSource(employees);
        if (this.sort) // check it is defined.
        {
            this.dataSource.sort = this.sort;
        }
      });
    } */

  navigateTo(path:string) : void {
    this.uiService.navigateTo(path, this.route);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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
