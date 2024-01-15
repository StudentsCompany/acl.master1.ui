import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAclUserDTO } from '../store/selector/acl.user.selector';
import { map } from 'rxjs';
import { AclUserService } from '../service/acl-user/acl.user.service';
import { UIService } from '../service/ui-service';
import { GameService } from '../service/game.service';
import { GameDTO } from '../model/game.model.dto';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit{


  constructor(private store : Store, private uiService : UIService, private aclUserService : AclUserService, private gameService : GameService){}

  ngOnInit(): void {
    if(this.uiService.token != undefined) {
      this.aclUserService.getAclUserByToken(this.uiService.token).pipe(
        map((res) => {
        console.log("user : ", res);
          this.uiService.aclUser = res;
      })).subscribe();

      this.gameService.getGameInProgressByAclUserId(this.uiService.aclUser.idAclUser).pipe(
            map((result) => {
              console.log("result : ", result);
              this.uiService.game = result;
          })).subscribe();
    }
  }
}
