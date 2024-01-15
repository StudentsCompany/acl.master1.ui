import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GameDTO } from "src/app/model/game.model.dto";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn : 'root'
})

export class GameService {

  private ROOT = 'game1/game1Jeu';

  private SAVE = this.ROOT + '/save';

  private GAME_IN_PROGRESS = this.ROOT + '/progress';

  constructor(private httpClient : HttpClient){}


  getGameById(id : number){
      return this.httpClient.get<GameDTO>(
          `${environment.urls.apiRoot}${this.ROOT}/${id}`
      );
  }

  getAll(){
      return this.httpClient.get<GameDTO[]> (
          `${environment.urls.apiRoot}${this.ROOT}`
      );
  }

  getGameByAclUserId(aclUserId : number) {
    return this.httpClient.get<GameDTO[]> (
            `${environment.urls.apiRoot}${this.ROOT}`
        );
  }

  getGameInProgressByAclUserId(aclUserId : number) {
      return this.httpClient.get<GameDTO> (
              `${environment.urls.apiRoot}${this.GAME_IN_PROGRESS}`
          );
    }

  postGame(gameDTO : GameDTO) {
    console.log("Post method")
    console.log(gameDTO)
    return this.httpClient.post<GameDTO>(
      `${environment.urls.apiRoot}${this.SAVE}`,
      gameDTO
    )
  }
}
