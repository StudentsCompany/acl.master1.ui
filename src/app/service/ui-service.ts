import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class RegistrationService{

    auth_mode = new BehaviorSubject<String>("register");
    // BehaviorSubject = EventEmitter

    loggedIn = new BehaviorSubject<boolean>(false);

    dipacheAuthMode(mode : String){
        this.auth_mode.next(mode);
    }

    
}