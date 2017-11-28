import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RouletteComponent } from './roulette/roulette.component';
import {CanActivateService} from "./can-activate.service";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ConfirmationComponent } from './roulette/confirmation/confirmation.component';
import { WinningComponent } from './roulette/winning/winning.component';
import { ErrorComponent } from './roulette/error/error.component';
import {GameService} from "./game.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RouletteComponent,
    ConfirmationComponent,
    WinningComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : 'logIn' , component : LogInComponent},
      {path : '' , redirectTo  : 'logIn',pathMatch : 'full'},
      {path : 'roulette', canActivate : [CanActivateService], component:RouletteComponent}
    ])
  ],
  providers: [CanActivateService,GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
