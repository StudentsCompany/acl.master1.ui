import { CardDTO } from '../model/card/card.model.dto';

export class GameDTO {
  gameId ?: number;

  playerId !: number;

  score !: number;

  state !: string;

  pile : CardDTO[] = [];
}
