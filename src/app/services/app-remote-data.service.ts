import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Everlive  } from 'angular-everlive';
import { Countries } from '../view-models/countries';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppRemoteDataService {

    private countriesUrl = 'https://api.everlive.com/v1/ejdvn0vq0t4dw3y4/Countries';  // URL to Telerik Backend Services

    constructor(private http: Http, private el: Everlive) { }

    getCountries(take : number, field : string, sortDir: number) : Observable<Countries[]> {  
        let sortExp = '{ "' + field + '" : ' + sortDir + " }";
        console.log(sortExp);       

        let headers = new Headers({ 'X-Everlive-Sort' : sortExp, 'X-Everlive-Take': take});
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.countriesUrl, options).map(response => response.json().Result as Countries[]);
    }
 }