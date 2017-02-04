import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailsPage } from '../pages';

import { EliteApi } from '../../shared/shared';


/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteapi:EliteApi) {}

  ionViewDidLoad() {
    this.eliteapi.getTournamentData(this.navParams.data.id).subscribe(
      s=>{this.teams=s.teams;}
    );
    console.log('ionViewDidLoad TeamsPage');
  }

  itemTapped($event,team){
    this.navCtrl.push(TeamDetailsPage,team);
  }
}
