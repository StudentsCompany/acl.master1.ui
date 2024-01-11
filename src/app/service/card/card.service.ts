import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardDTO } from "src/app/model/card/card.model.dto";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn : 'root'
})

export class CardService {

  private ROOT = 'cards/card';

  private REGISTER = this.ROOT + '/register'

  public cards!: CardDTO[];

  constructor(private httpClient : HttpClient){

  }


  getCardById(id : number){
      return this.httpClient.get<CardDTO>(
          `${environment.urls.apiRoot}${this.ROOT}/${id}`
      );
  }

  getAll(){
      return this.httpClient.get<CardDTO[]> (
          `${environment.urls.apiRoot}${this.ROOT}`
      );
  }

  drawRandomCard(cards :CardDTO[]) : CardDTO{ //extract the card from the pile
    let randomIndex: number = Math.round(Math.random()*(cards.length-1));
    let randomCard: CardDTO = cards[randomIndex];
    cards.splice(cards.indexOf(randomCard), 1);
    console.log("pile after extracting cards :", cards);

    return randomCard;
  }


  getScore(cards :CardDTO[]) : number {
    let result : number = 0;
    for(let i = 0; i < cards.length; i = i+2) {
      //check if the result should be -value, +value or -2*value
      let multiplier : number = this.getScoreMultiplier(cards[i], cards[i+1]);
      console.log("cards : ");
      console.log(cards);
      console.log("multiplier : ", multiplier);
      console.log(multiplier);
      //   			System.out.println("multiplier : " + multiplier);
      //add first card value to result
      //   			System.out.println("previous result " + result);
      result += multiplier * cards[i].point;
      //   			System.out.println("result after adding first card " + result);
      //add second card value to result
      result += multiplier * cards[i+1].point;
      //   			System.out.println("result after adding second card " + result);
    }
    console.log("result : ", result);
    return result;
  }

  	getScoreMultiplier(card1 : CardDTO, card2 : CardDTO) : number {
      console.log(card1);
      console.log(card2);
  		if(card1.symbol == card2.symbol) { //same colors : -1
  			return -1;
  		}
  		else if(card1.value == card2.value) { //same values : -2
  			return -2;
  		}
  		else { /*different colors & different values*/
  			return 1;
  		}
  	}



  /* postCard(cardDTO : CardDTO){ //TODO useless?
      console.log("Post method")
      console.log(cardDTO)
      return this.httpClient.post<CardDTO>(
          `${environment.urls.apiRoot}${this.REGISTER}`,
          cardDTO
      )
  } */
}
