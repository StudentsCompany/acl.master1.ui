import { CardDTO } from '../model/card/card.model.dto';

export class GameDTO {
  gameId ?: number;

  playerId !: number;

  score !: number;

  state !: GameState;

  pile : CardDTO[] = [];
}

export enum GameState {

	PROGRESS = "PROGRESS",
	FINISHED = "FINISHED"

}
