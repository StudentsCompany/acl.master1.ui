import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RegistrationService } from '../service/ui-service';
import { Store } from '@ngrx/store';
import { login } from '../store/action/acl.user.action';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(
    private registrationService : RegistrationService, 
    private readonly store : Store){

  }

  isHandset$ !: Observable<boolean>;
  isLoggedIn : boolean = false;

  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    this.registrationService.loggedIn.subscribe((res) => {
      this.isLoggedIn = res;
      console.log("---------" + this.isLoggedIn)
    })
  }

  onAuthMe(auth_mode : String){
    this.registrationService.dipacheAuthMode(auth_mode); // next (BehaviorSubject) = emit (EventEmitter)
  }

  
}
