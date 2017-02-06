import { Component } from '@angular/core';
import { LoadingController,NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages';

import { EliteApi } from '../../shared/shared';

import * as _ from 'lodash';
/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'teams.html'
})
export class TeamsPage {

  private allteams:any;
  private allTeamDivision:any;
  teams=[];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private eliteapi:EliteApi,
    private loadingcontroller:LoadingController
    ) {}

  ionViewDidLoad() {

    let selectedTournery=this.navParams.data;

    let loader=this.loadingcontroller.create({
      content:"Getting data..."
    });
    loader.present().then(
      ()=>{
        this.eliteapi.getTournamentData(selectedTournery.id).subscribe(
            s=>{
              this.allteams=s.teams;
              this.allTeamDivision=_.chain(s.teams).groupBy('division').toPairs()
              .map(item=>_.zipObject(['divisionName','divisionTeams'],item))
              .value();

              this.teams=this.allTeamDivision;
              console.log("division team",this.teams);
              loader.dismiss();
            }
          );
      }
    );

    
    console.log('ionViewDidLoad TeamsPage');
  }

  itemTapped($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }
}
