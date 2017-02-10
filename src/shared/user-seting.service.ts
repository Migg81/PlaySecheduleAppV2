import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';

@Injectable() 
export class  UserSettings{
    constructor(public storage: Storage) {        
    }

    favariteTeam(team,tournamentId,tournamentName)
    {
        this.storage.set('name', 'Max');

        let item ={team:team,tournamentId:tournamentId,tournamentName:tournamentName};
        this.storage.set('2',JSON.stringify(item));
    }
    unFavariteTeam(team)
    {        
        this.storage.remove(team.id);
    }
    isFavariteTeam(teamId)
    {
        return this.storage.get(teamId).then(value=>value?true:false);
    }

    getAllFavarite(){
        let item=[];
        _.forIn(window.localStorage,(v,k)=>{
            item.push(JSON.parse(v))
        });

        return item.length?item:null;
    }
}