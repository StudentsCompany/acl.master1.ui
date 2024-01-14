import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./service/auth.service";

export const AuthGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    console.log(auth.isAuthenticated());/*
    if(!auth.isAuthenticated()) {
        //router.navigateByUrl('/home/registration')
        return false
    }
    return true */

    return auth.isAuthenticated();
}
