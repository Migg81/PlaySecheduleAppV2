import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StandingsPage,TeamDetailsPage } from '../pages';
/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

  standingsTab=StandingsPage;
  teamDetailTab=TeamDetailsPage;
  team:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team=this.navParams.data;
    this.standingsTab=StandingsPage;
    this.teamDetailTab=TeamDetailsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

}
