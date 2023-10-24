import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UIService } from '../service/ui-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game1-jeu',
  templateUrl: './game1-jeu.component.html',
  styleUrls: ['./game1-jeu.component.scss']
})
export class Game1JeuComponent implements AfterViewInit {
  score:number = 21;
  tour:number = 3;

  drawnCardsCounter: number = 0;

  @ViewChild('card1') card1!: ElementRef;
  @ViewChild('card2') card2!: ElementRef;
  @ViewChild('card3') card3!: ElementRef;
  @ViewChild('card4') card4!: ElementRef;
  @ViewChild('card5') card5!: ElementRef;
  @ViewChild('card6') card6!: ElementRef;
  @ViewChild('card7') card7!: ElementRef;
  @ViewChild('card8') card8!: ElementRef;
  @ViewChild('card9') card9!: ElementRef;
  @ViewChild('card10') card10!: ElementRef;

  ngAfterViewInit() {
    this.displayedCards = [this.card1, this.card2, this.card3, this.card4, this.card5, this.card6, this.card7, this.card8, this.card9, this.card10];
  }

  displayedCards!: ElementRef[];
  constructor(private uiService : UIService, private route: ActivatedRoute) {}

  navigateTo(path:string) : void {
    this.uiService.navigateTo(path, this.route);
  }

  drawCards() : void {
    console.log("drawn cards before : ", this.drawnCardsCounter);
    if(this.drawnCardsCounter < 10) {
      for(let i = 0; i < 2; i++) {
        let element: ElementRef = this.displayedCards[this.drawnCardsCounter + i];
        element.nativeElement.src = "assets/Files/cards/" + Cards.getRandomCard() + ".gif";
        element.nativeElement.hidden = false;
        console.log(this.displayedCards[this.drawnCardsCounter + i].nativeElement.src);
      }
      this.drawnCardsCounter += 2;
      console.log("drawn cards : ", this.drawnCardsCounter);
    }
  }
}

export class Cards {

  constructor() {}
  public static cards: string[] = [
  "7c" ,
  "7d" ,
  "7h" ,
  "7s" ,
  "8c" ,
  "8d" ,
  "8h" ,
  "8s" ,
  "9c" ,
  "9d" ,
  "9h" ,
  "9s" ,
  "10c" ,
  "10d" ,
  "10h" ,
  "10s" ,
  "Ac" ,
  "Ad" ,
  "Ah" ,
  "As" ,
  "Jc" ,
  "Jd" ,
  "Jh" ,
  "Js" ,
  "Kc" ,
  "Kd" ,
  "Kh" ,
  "Ks" ,
  "Qc" ,
  "Qd" ,
  "Qh" ,
  "Qs"
  ];

  static getRandomCard(): string {
    let res: number = Math.round(Math.random()*(Cards.cards.length-1));
    console.log(res);
    return Cards.cards[res];
  }
}
