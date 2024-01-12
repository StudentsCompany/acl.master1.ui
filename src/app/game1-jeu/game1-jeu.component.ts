import { Component, OnInit } from '@angular/core';
import { UIService } from '../service/ui-service';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../service/card/card.service';
import { GameService } from '../service/game.service';
import { CardDTO } from '../model/card/card.model.dto';
import { GameDTO } from '../model/game.model.dto';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { loadAclUserSuccess, loadAclUserTokenSuccess, loadCardDTOsSuccess } from '../store/action/acl.user.action';
import { Store } from '@ngrx/store';
import { selectCards } from '../store/selector/acl.user.selector';

@Component({
  selector: 'app-game1-jeu',
  templateUrl: './game1-jeu.component.html',
  styleUrls: ['./game1-jeu.component.scss']
})
export class Game1JeuComponent implements OnInit {
  score:number = 21;
  tour:number = 0;
  cards!: CardDTO[];
  cardtttt$ : Observable<CardDTO[] | null> = this.store.select(selectCards);

  drawnCardsCounter: number = 0;

  pairs: CardDTO[][][] = []; // pairs[ligne][paire][carte]

  game : GameDTO;

  constructor(private uiService : UIService, private route: ActivatedRoute, public cardService : CardService, public gameService : GameService, private store : Store) {
    this.game = new GameDTO();
    this.game.gameId = uiService.nextGameId;
    uiService.nextGameId++;
    this.game.playerId = 1; //TODO get player id
    this.game.score = 0;
    this.game.state = "PENDING";
  }

  ngOnInit(): void {


      /* this.cardtttt$.subscribe((result) => {
        console.log("--------------------------", result);
        if(result == null){
            this.cardService.getAll().pipe(
                        map((result) => {
                            this.store.dispatch(loadCardDTOsSuccess({cardDTOs : result}));
                            this.cards = result;
                            console.log("Cards from backend");
                            console.log(this.cards);
                        })).subscribe();
        }else {
                   this.cards = result;
                   console.log("Cards from store");
                   console.log(this.cards);
        }
      }); */

    if(this.cardService.cards != undefined){
      this.cards = this.cardService.cards;
      this.game.pile = this.cards;

      console.log("Cards from service");
      console.log(this.cardService.cards);
    }else{
      this.cardService.getAll().pipe(
                        map((result2) => {
                            this.cards = result2;
                            this.game.pile = this.cards;

                            this.cardService.cards = result2;
                            console.log("Cards from backend : ")
                            console.log(this.cardService.cards);
                        })
                      ).subscribe();
    }

       /*
    this.store.select(selectCards).pipe(
    map((result) => {
         if(result == null) {
                  this.cardService.getAll().pipe(
                    map((result2) => {
                        this.store.dispatch(loadCardDTOsSuccess({cardDTOs : result2}));
                        this.cards = result2;

                        this.cardService.cards = result2;
                        console.log("Cards from service : ")
                        console.log(this.cardService.cards);

                        console.log("Cards from backend");
                        console.log(this.cards);
                    })
                  ).subscribe();
                }
                else {
                  this.cards = result;
                  this.cards = this.cardService.cards;
                  console.log("Cards from store");
                  console.log(this.cards);
                }
      })).subscribe()
*/
  }

  navigateTo(path:string) : void {
    this.uiService.navigateTo(path, this.route);
  }

  reloadPage(){
      window.location.reload()
  }

  drawCards(amount : number) : void {
    if(this.drawnCardsCounter < 10) {
      let lineIndex : number = 0;
      if(this.drawnCardsCounter >= 4) {
        lineIndex = 1;
      }

      if(this.pairs.length == 0) {
        this.pairs[0] = [];
        this.pairs[1] = [];
      }

      if(this.pairs[lineIndex].length == 0) {
        this.pairs[lineIndex][0] = [];
      }
      else {
        this.pairs[lineIndex][this.pairs[lineIndex].length] = [];
      }

      //draw the amount of random cards
      for(let i = 0; i < amount; i++) {
        let randomCard : CardDTO = this.cardService.drawRandomCard(this.game.pile);

        this.pairs[lineIndex][this.pairs[lineIndex].length -1].push(randomCard);
      }
      this.game.score += this.cardService.getScore(this.pairs[lineIndex][this.pairs[lineIndex].length -1]);
      this.tour++;

      console.log("score : ", this.game.score);

      this.drawnCardsCounter += amount;
    }
    this.gameService.postGame(this.game);
  }
}
