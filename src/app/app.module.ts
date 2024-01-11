import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs'
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {FormsModule} from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {MatListModule} from '@angular/material/list';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { Game1Component } from './game1/game1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesComponent } from './games/games.component';
import { ControlCenterComponent } from './control-center/control-center.component';
import { RegistrationComponent } from './registration/registration.component';
import { aclUserReducer } from './store/reducer/acl.user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effect/acl.user.effect';
import { Game1JeuComponent } from './game1-jeu/game1-jeu.component';
import { Game1ClassementComponent } from './game1-classement/game1-classement.component';
import { Game1HomeComponent } from './game1-home/game1-home.component';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotAllowedComponent,
    NotFoundComponent,
    HomeComponent,
    Game1Component,
    GamesComponent,
    ControlCenterComponent,
    RegistrationComponent,
    Game1JeuComponent,
    Game1ClassementComponent,
    Game1HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatTabsModule,
    StoreModule.forRoot(
      { user : aclUserReducer },
      {
        runtimeChecks : {
          strictActionTypeUniqueness : true,
          strictActionImmutability : true,
          strictStateImmutability : true
        }
      }
    ),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
