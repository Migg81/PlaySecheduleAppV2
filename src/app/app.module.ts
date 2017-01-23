import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/pages';
import { TournamentsPage,TeamsPage,TeamDetailsPage,StandingsPage,TeamHomePage ,GamePage} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailsPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailsPage,
     TeamHomePage,
    StandingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
