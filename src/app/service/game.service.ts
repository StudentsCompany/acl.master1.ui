import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GameDTO } from "src/app/model/game.model.dto";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn : 'root'
})

export class GameService {

  private ROOT = 'game1';

  private REGISTER = this.ROOT + '/register'

  constructor(private httpClient : HttpClient){

  }


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

  postGame(gameDTO : GameDTO) {
    console.log("Post method")
    console.log(gameDTO)
    return this.httpClient.post<GameDTO>(
      `${environment.urls.apiRoot}${this.REGISTER}`,
      gameDTO
    )
  }
}
