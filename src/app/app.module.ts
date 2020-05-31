import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './_services/game.service';
import { UserService } from './_services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [
    GameService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
