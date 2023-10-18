import { Component } from '@angular/core';
import { UIService } from '../service/ui-service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-game1-home',
  templateUrl: './game1-home.component.html',
  styleUrls: ['./game1-home.component.scss']
})
export class Game1HomeComponent {
  constructor(private uiService : UIService, private route: ActivatedRoute) {}

  navigateTo(path:string) : void {
    this.uiService.navigateTo(path, this.route);
  }
}
