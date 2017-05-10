import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Countries } from '../view-models/countries';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppRemoteDataService {

    private countriesUrl = 'https://api.everlive.com/v1/ejdvn0vq0t4dw3y4/Countries';  // URL to Telerik Backend Services

    constructor(private http: Http) { }

    getCountries(take : number, field : string, sortDir: number) : Observable<Countries[]> {  
        let sortExp = '{ "' + field + '" : ' + sortDir + " }";
        console.log(sortExp);       

        let headers = new Headers({ 'X-Everlive-Sort' : sortExp, 'X-Everlive-Take': take});
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.countriesUrl, options).map(response => response.json().Result as Countries[]);
    }

    // getGridCountries(take : number, skip: number) : Observable<Countries[]> {    
    //     let headers = new Headers({ 'X-Everlive-Take': take, 'X-Everlive-Skip': skip  });
    //     let options = new RequestOptions({ headers: headers });

    //     return this.http.get(this.countriesUrl, options).map(response => response.json().Result as Countries[]);
    //  }

 }