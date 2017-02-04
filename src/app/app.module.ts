import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/pages';
import { TournamentsPage,TeamsPage,TeamDetailsPage,StandingsPage,TeamHomePage ,GamePage} from '../pages/pages';
import { EliteApi } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailsPage,
    TeamHomePage,
    StandingsPage,
    GamePage
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
    StandingsPage,
    GamePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},EliteApi ,HttpModule]
})
export class AppModule {}
