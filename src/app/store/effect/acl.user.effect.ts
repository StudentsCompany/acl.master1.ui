import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AclUserService } from "src/app/service/acl-user/acl.user.service";
import { loadAclUserSuccess, loadAclUserTokenSuccess, login, register } from "../action/acl.user.action";
import { EMPTY, catchError, map, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { UIService } from "src/app/service/ui-service";
import { ActivatedRoute } from '@angular/router'

@Injectable()
export class UserEffects{

    constructor(
        private readonly action$ : Actions,
        private readonly store : Store,
        private readonly aclUserService : AclUserService,
        private uiService : UIService,
        private route : ActivatedRoute
    ){

    }

    registerAclUser$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(register),
                tap((data) => {
                    this.aclUserService.postAclUser(data.aclUserDTO).pipe(
                        catchError(() => EMPTY)
                    ).subscribe();
                })
            )
        },
        {dispatch : false}
    );

    loginAclUser$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(login),
                tap((data) => {
                    // The data or aclUserDTO here is imcomplete
                    // It just contains the username and the password
                    this.aclUserService.getToken(data.aclUserDTO).pipe(
                        map((result) => {
                            console.log("token recu : " + result.token);
                            this.uiService.token = result.token;

                            this.uiService.loggedIn.next(true);
                            this.uiService.navigateTo("../home/games", this.route)
                            loadAclUserTokenSuccess({token : result}); // Will store the result
                            console.log("STORE : loadAclUserTokenSuccess");
                            // For Romain
                            // After we stored the result, we should dispache another action
                                //and load the rest of the user information about the user (his personal info and about the game).
                            // this.store.dispatch(...)
                        }),
                        catchError(() => EMPTY)
                    ).subscribe(() => {
                        this.uiService.loggedIn.next(true);
                    });
                    // The both request are independante
                    this.aclUserService.getAclUserByUsername(data.aclUserDTO.username).pipe(
                        map((result) => {
                            // the result or aclUserDTO here complete
                            // we can store it.
                            //loadAclUserSuccess({aclUserDTO : result}); // Will store the result
                            loadAclUserTokenSuccess({token : result})
                        })
                    );
                })
            )
        },
        {dispatch : false}
    )
}
