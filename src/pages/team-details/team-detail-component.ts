import { Component } from '@angular/core';
import {AlertController, NavController, NavParams , ToastController} from 'ionic-angular';
import { EliteApi,UserSettings } from '../../shared/shared';
import { GamePage } from '../pages';
import * as _ from 'lodash';
import * as moment from 'moment';
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
  dateFilter:string;
  teamStanding:any;
  allGames:any[];
  useDateFilter:false;
  isFollowing:boolean;

  private tourneyData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eliteApi:  EliteApi,
    public alertController:AlertController,
    public toastController:ToastController,
    public userSettings:UserSettings) {
    this.team=this.navParams.data;
  }

  ionViewWillLoad() {
    this.team=this.navParams.data;
    this.tourneyData=this.eliteApi.getCurrenTourney();
    this.teamStanding=_.find(this.tourneyData.standings,{'teamId':this.team.id})
    this.isFollowing=false;
  }

  ionViewDidLoad() {
    this.team=this.navParams.data;
    this.tourneyData=this.eliteApi.getCurrenTourney();

    this.games=_.chain(this.tourneyData.games)
                .filter(g=>g.team1id===this.team.id || g.team2Id===this.team.id)
                .map(g=>{
                  let isteam1=(g.team1id===this.team.id);
                  let opponentName=(isteam1?g.team2:g.team1);
                  let scoreDisplay=(this.getScoreDisplay(isteam1,g.team1Score,g.team2Score));

                  return{
                      gameid:g.id,
                      opponent:opponentName,
                      time:Date.parse(g.time),
                      location:g.location,
                      scoreDisplay:scoreDisplay,
                      homeaway:(isteam1? "vs.":"at")
                  };
                })
                .value()

      this.teamStanding=_.find(this.tourneyData.standings,{'teamId':this.team.id});          
      this.allGames=this.games;
      this.userSettings.isFavariteTeam(this.team.id).then(value=>this.isFollowing=value);
  }

  getScoreDisplay(isteam1,team1Score,team2Score){
    if(team1Score && team2Score){
          var teamScore=(isteam1?team1Score:team2Score);
          var opponentScore=(isteam1?team2Score:team1Score);
          var winIndicator=(teamScore>opponentScore? "W: ":"L: ")
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

  dateChanged(){
    if(this.useDateFilter)
    {
       this.games=_.filter((this.allGames),g=>moment(g.time).isSame(this.dateFilter,'day'));
    }
    else{
      this.games=this.allGames;
    }   
  }

  getScoreWonoL(game)
  {
    return game.scoreDisplay ? game.scoreDisplay[0] :'';
  }
  getScoreDisplayBadgeClass(game){
    return game.scoreDisplay.indexOf('W') === 0 ? "primary":"danger";
  }

  toggleFollow(){
    if(this.isFollowing){
      let confirm=this.alertController.create({
        title:"Unfollow?",
        message:'Are you sure you want to unfollow?',
        buttons:[
          {
            text:'Yes',
            handler:()=>{
              this.isFollowing=false;
              this.userSettings.unFavariteTeam(this.team);
              let toast=this.toastController.create({
                message:"You have Unfollow this team.",
                duration:2000,
                position:'buttom'
              });
              toast.present();
            }  
          },
          {
            text:'No'
          }
        ]
      });
      confirm.present();
    }
    else
    {
      this.isFollowing=true;
      this.userSettings.favariteTeam(this.team,this.tourneyData.tournament.id,this.tourneyData.tournament.name);
    }
  }
}
