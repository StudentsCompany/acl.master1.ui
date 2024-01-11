import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router, ActivatedRoute} from "@angular/router"

@Injectable({
    providedIn : 'root'
})

export class UIService {

    constructor(private router:Router) {}

    nextGameId : number = 0;

    auth_mode = new BehaviorSubject<String>("register");
    // BehaviorSubject = EventEmitter

    loggedIn = new BehaviorSubject<boolean>(false);

    token : string | undefined = "";


    dipacheAuthMode(mode : String){
        this.auth_mode.next(mode);
    }

    navigateTo(path:String, route:ActivatedRoute) : void {
            this.router.navigate([path], {relativeTo: route});
    }
}
