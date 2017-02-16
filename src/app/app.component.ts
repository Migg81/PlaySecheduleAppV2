import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,LoadingController,Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MyTeamsPage,TournamentsPage,TeamHomePage } from '../pages/pages';
import { EliteApi ,UserSettings} from '../shared/shared';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  favoriteTeams=[];
  rootPage: any = MyTeamsPage;

  constructor(
              public platform: Platform,
              public userSettings:UserSettings,
              public loadingController:LoadingController,
              public eliteApi:EliteApi,
              public events:Events,
            ) {
    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.refreshFavoriteTeam();
      this.events.subscribe("favarite:Changed",()=>this.refreshFavoriteTeam());
    });
  }

  refreshFavoriteTeam()
  {
    this.favoriteTeams=this.userSettings.getAllFavarite();
  }

  goHome() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(MyTeamsPage);
  }
  goToteam(favarite)
  {
    let loader=this.loadingController.create({
      content:"Getting data",
      dismissOnPageChange:true
    })
    loader.present();
    this.eliteApi.getTournamentData(favarite.tournamentsId).subscribe(
      l=>this.nav.push(TeamHomePage)
    )
  }

  goTournament(){
    this.nav.push(TournamentsPage);
  }
}
