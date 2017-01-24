import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

@Injectable() 
export class EliteApi{
    private baseUrl="https://elite-secdule-app2.firebaseio.com";

    constructor(private http:Http){}
}