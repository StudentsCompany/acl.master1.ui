import { Component } from '@angular/core';
import { UIService } from '../service/ui-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game1-end',
  templateUrl: './game1-end.component.html',
  styleUrls: ['./game1-end.component.scss']
})
export class Game1EndComponent {
  constructor(private uiService : UIService, private route: ActivatedRoute) {}

  navigateTo(path:string) : void {
    this.uiService.navigateTo(path, this.route);
  }
}
