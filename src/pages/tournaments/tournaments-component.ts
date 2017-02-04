import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { MyTeamsPage,TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';
/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

 tournaments:any;
  constructor(public navCtrl: NavController,
              public eliteapi:EliteApi,
              private lodingControler:LoadingController,
              public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
    let loader=this.lodingControler.create({
      content: "gating tournament data"
    });

    loader.present().then(()=>{
      this.eliteapi.getTournaments().then(
        data=>{
            this.tournaments=data;
            loader.dismiss();
          }
        );
    })    
  }

  itemTapped($events,tourney){
    this.navCtrl.push(TeamsPage,tourney);
  }

}
