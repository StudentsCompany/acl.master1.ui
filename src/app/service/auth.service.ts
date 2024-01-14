import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {UIService } from '../service/ui-service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated : boolean;

  constructor(private store : Store, private uiService : UIService) {this.authenticated = false;}

  isAuthenticated(): boolean {
    console.log(this.uiService.token);
    return this.uiService.token != undefined;
  }
}
