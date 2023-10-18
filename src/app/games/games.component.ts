import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAclUserDTO } from '../store/selector/acl.user.selector';
import { map } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit{


  constructor(
    private store : Store
  ){

  }

  ngOnInit(): void {
    this.store.select(selectAclUserDTO).pipe(
      map((result) => {
        console.log("Got what a select in the store !!! Fantastic my NgRx archutecture is working. ")
        console.log(result)
      })
    )
  }
}
