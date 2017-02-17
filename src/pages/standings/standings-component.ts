import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
import { GamePage } from '../pages';
import * as _ from 'lodash';
/*
  Generated class for the Standings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html'
})
export class StandingsPage {

  allStanding:any;
  standings:any[];
  team:any;
  divisionFilter="division";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi: EliteApi
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandingsPage');
    this.team=this.navParams.data;
    let tourneyData=this.eliteApi.getCurrenTourney();
    this.standings=tourneyData.standings;

    //this.allStanding=_.chain(this.standings).groupBy('division').toPairs()
    //.map(item=>_.zipObject(['divisionName','divisionStandings'],item))
    //.value()

    this.allStanding=tourneyData.standings;
  }

  getHeader(record,recordIndex,records)
  {
    if(recordIndex===0 || record.division !==records[recordIndex-1].division)
    {
      return record.division;
    }
    return null;
  }

  filterDivision()
  {
    if(this.divisionFilter==="all"){
      this.standings=this.allStanding;
    }
    else{
      this.standings=_.filter(this.allStanding,s=>s.division===this.team.division);
    }
  }
}
