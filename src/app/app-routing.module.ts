import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

import { Game1HomeComponent } from './game1-home/game1-home.component';
import { Game1JeuComponent } from './game1-jeu/game1-jeu.component';
import { Game1ClassementComponent } from './game1-classement/game1-classement.component';
import { Game1Component } from './game1/game1.component';
import { GamesComponent } from './games/games.component';
import { ControlCenterComponent } from './control-center/control-center.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path : '', redirectTo :'/home', pathMatch :'full' },
  { path : 'home/game1', redirectTo :'/home/game1/game1-home', pathMatch :'full' },

  { path : 'home', component : HomeComponent, title : 'home', children : [
    { path : 'games', component : GamesComponent, title : 'games' },
    { path : 'game1', component : Game1Component, title : 'game1', children : [
      { path : 'game1-home', component : Game1HomeComponent, title : 'home' },
      { path : 'game1-jeu', component : Game1JeuComponent, title : 'jeu' },
      { path : 'game1-classement', component : Game1ClassementComponent, title : 'classement' },
    ]},
    { path : 'control-center', component : ControlCenterComponent, title : 'control-center' },
    { path : 'registration', component : RegistrationComponent, title : 'registration' },
  ]},
  { path : '503', component : NotAllowedComponent, title : 'not allowed' },
  { path : '404', component : NotFoundComponent, title : 'not found 404' },
  { path : '**', component : NotFoundComponent, title : 'not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

