import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/pages';
import {MapPage, TournamentsPage,TeamsPage,TeamDetailsPage,StandingsPage,TeamHomePage ,GamePage} from '../pages/pages';
import { EliteApi,UserSettings } from '../shared/shared';
import { Storage } from '@ionic/storage';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailsPage,
    TeamHomePage,
    StandingsPage,
    GamePage,
    MapPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyA4K5h37BjZZqRbAQ9X17AjvADBQWXBmw4'})
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
      GamePage,
      MapPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},EliteApi,Storage ,HttpModule,UserSettings]
})
export class AppModule {}
