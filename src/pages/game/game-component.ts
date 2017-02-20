import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
import {MapPage, TeamHomePage } from '../pages';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage {

  game:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi:EliteApi) {
        this.game=this.navParams.data;
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.game=this.navParams.data;
  }

  teamTapped(teamId){
    let tourneyData=this.eliteApi.getCurrenTourney();
    let team=tourneyData.team.find(t=>t.id===teamId);
    this.navCtrl.push(TeamHomePage,team)
  }  
  goToDirections(){

  }

  goToMap(){
    this.navCtrl.push(MapPage,this.game);
  }

  isWinner(score1,score2){
    return Number(score1)>Number(score2);
  }
}
