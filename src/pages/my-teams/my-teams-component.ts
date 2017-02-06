import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams } from 'ionic-angular';

import {TeamHomePage, TournamentsPage } from '../pages';
import { EliteApi } from '../../shared/shared';


@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  favorites=[
    {
      team:{id:6182,name:'Hc elite 7th',coach:'smajumder'},
      tournamentId:"89e13aa2-ba6d-4f55-9cc2-61eba6172c63",
      tournamentName:"March Madness",
    },
    {
      team:{id:6183,name:'Hc elite',coach:'smajumder'},
      tournamentId:"98c6857e-b0d1-4295-b89e-2d95a45437f2",
      tournamentName:"Holiday hopes chalange",      
    }
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    public eliteApi:EliteApi
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

        //this.navCtrl.push(TeamHomePage,favorite.team)
  }

  goToTournament(){
    this.navCtrl.push(TournamentsPage);
  }

}
