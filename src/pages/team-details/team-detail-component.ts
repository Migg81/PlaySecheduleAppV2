import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
import { GamePage } from '../pages';
import * as _ from 'lodash';
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
  games:any[];
  private tourneyData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eliteApi:  EliteApi) {
    this.team=this.navParams.data;
  }

  ionViewDidLoad() {
    this.team=this.navParams.data;
    this.tourneyData=this.eliteApi.getCurrenTourney();

    this.games=_.chain(this.tourneyData.games)
                .filter(g=>g.team1id===this.team.id || g.team2Id===this.team.id)
                .map(g=>{
                  let isteam1=(g.team1id===this.team.id);
                  let opponentName=(isteam1?g.team2:g.team1);
                  let scoreDispaly=(this.getScoreDisplay(isteam1,g.team1Score,g.team2Score));

                  return{
                      gameid:g.id,
                      opponent:opponentName,
                      time:Date.parse(g.time),
                      location:g.location,
                      scoreDispaly:scoreDispaly,
                      homeaway:(isteam1? "vs.":"away")
                  };
                })
                .value()
  }

  getScoreDisplay(isteam1,team1Score,team2Score){
    if(teamScore && team2Score){
          var teamScore=(isteam1?team1Score:team2Score);
          var opponentScore=(isteam1?team2Score:team1Score);
          var winIndicator=(teamScore>opponentScore? "W":"L")
          return winIndicator + teamScore + "-" + opponentScore;
    }
    else
    {
      return "";
    }
  }

  gameClicked($event,game)
  {
    let sourceGame=this.tourneyData.games.find(g=>g.id===game.gameid);
    this.navCtrl.push(GamePage,sourceGame);
  }

}
