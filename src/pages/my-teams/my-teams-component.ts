import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams } from 'ionic-angular';

import {TeamHomePage, TournamentsPage } from '../pages';
import { EliteApi ,UserSettings} from '../../shared/shared';


@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  favorites=[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    public eliteApi:EliteApi,
    public userSettings:UserSettings
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  favoritetapped($event, favorite){

    let loader=this.loadingController.create({
      content:"Gating data...",
      dismissOnPageChange:true
    });

    loader.present();
        this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t=>this.navCtrl.push(TeamHomePage,favorite.team))
  }

  goToTournament(){
    this.navCtrl.push(TournamentsPage);
  }

  ionViewDidEnter()
  {
    this.favorites=this.userSettings.getAllFavarite();
  }

}
