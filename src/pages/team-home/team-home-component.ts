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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

}
