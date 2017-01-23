import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TeamDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html'
})
export class TeamDetailsPage {
  team:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailsPage');
  }

}
