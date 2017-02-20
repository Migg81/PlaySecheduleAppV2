import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';

/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  map: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eliteApi:EliteApi) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    let games=this.navParams.data;
    let tourneyData=this.eliteApi.getCurrenTourney();
    let location=tourneyData.locations[games.locationId];

    this.map = {
      lat: location.latitude,
      lng: location.longitude,
      zoom: 12,
      markerLabel: games.location 
    };

  }

}
