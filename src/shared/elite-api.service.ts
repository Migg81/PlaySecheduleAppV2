import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs'
import { Observable } from 'rxjs/Observable';
@Injectable() 
export class EliteApi{
    private baseUrl="https://elite-secdule-app2.firebaseio.com";

    currentTourney:any={};
   private  tourneyDates={};

    constructor(private http:Http){}

    getTournaments(){
        return new Promise(resolve=>{
            this.http.get(`${this.baseUrl}/tournaments.json`)
            .subscribe(res=>resolve(res.json()));
        });
    }

    getTournamentData(tourneyId,forcereferesh:boolean=false):Observable<any>{

        if(!forcereferesh && this.tourneyDates[tourneyId])
        {
            this.currentTourney=this.tourneyDates[tourneyId];
            console.log('****No need to make HTTP cal, just return the data.****');
            return Observable.of(this.currentTourney)
        }
        console.log('****About to make fresh HTTP call. ***')
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
                    .map(response=>{
                        this.tourneyDates[tourneyId]=response.json();
                        this.currentTourney=this.tourneyDates[tourneyId]
                        return this.currentTourney;
                    });
    }

    getCurrenTourney()
    {
        return this.currentTourney;
    }

    refreshCurrentTourney()
    {
        return this.getTournamentData(this.currentTourney.tournament.id,true);
    }
}