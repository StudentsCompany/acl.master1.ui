import { Component } from '@angular/core';
import { UIService } from '../service/ui-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game1-classement',
  templateUrl: './game1-classement.component.html',
  styleUrls: ['./game1-classement.component.scss']
})
export class Game1ClassementComponent {
  constructor(private uiService : UIService, private route: ActivatedRoute) {}

  navigateTo(path:string) : void {
    this.uiService.navigateTo(path, this.route);
  }
}
