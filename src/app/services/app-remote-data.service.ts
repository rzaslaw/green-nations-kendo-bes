import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Countries } from '../view-models/countries';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppRemoteDataService {

    private countriesUrl = 'https://api.everlive.com/v1/ejdvn0vq0t4dw3y4/Countries';  // URL to Telerik Backend Services
    public headers = new Headers({'X-Everlive-Take': 10});

    constructor(private http: Http) { }

    getCountries() : Observable<Countries[]> {
    return this.http.get(this.countriesUrl, {headers: this.headers}).map(response => response.json().Result as Countries[]);
  }

 }