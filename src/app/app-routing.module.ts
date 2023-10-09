import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { Game1Component } from './game1/game1.component';
import { GamesComponent } from './games/games.component';
import { ControlCenterComponent } from './control-center/control-center.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path : '', redirectTo :'/home', pathMatch :'full' },
  { path : 'home', component : HomeComponent, title : 'home', children : [
    { path : 'games', component : GamesComponent, title : 'games' },
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

