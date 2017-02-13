import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';

@Injectable() 
export class  UserSettings{

    storage=new  Storage(['localstorage']);
    constructor() {        
        
    }
    
    favariteTeam(team,tournamentId,tournamentName)
    {
        let item ={team:team,tournamentId:tournamentId,tournamentName:tournamentName};
        this.storage.set(team.id.toString(),JSON.stringify(item));
    }
    unFavariteTeam(team)
    {        
        this.storage.remove(team.id.toString());
    }
    isFavariteTeam(teamId)
    {
        return this.storage.get(teamId.toString()).then(value=>value?true:false);
    }

    getAllFavarite(){
        let item=[];
        _.forIn(window.localStorage,(v,k)=>{
            var t=JSON.parse(v);
            var tt=JSON.parse(t);

            var rr=JSON.parse(JSON.parse(v));
            item.push(JSON.parse(JSON.parse(v)))
        });

        return item.length?item:null;
    }
}