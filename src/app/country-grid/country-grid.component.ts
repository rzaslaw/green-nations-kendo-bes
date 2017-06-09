import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CountriesService } from '../services/app-grid-data.service';
import { Countries } from '../view-models/countries';
import { Observable } from 'rxjs/Rx';

// Kendo UI Grid Requirements
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-country-grid',
  templateUrl: './country-grid.component.html',
  styleUrls: ['./country-grid.component.css']
})
export class CountryGridComponent {
    public view: Observable<GridDataResult>;
    public state: State = {
        skip: 0,
        take: 10
    };

    constructor(private service: CountriesService) {
       this.view  = this.service.fetchData(this.state);
    }

    public dataStateChange(stateChangedEvent: DataStateChangeEvent): void {
        //console.log((<any>stateChangedEvent).ansddddd);
        //console.log((<any>stateChangedEvent).filter);
        this.state = stateChangedEvent;
        //console.log(this.state.filter);
        this.view = this.service.fetchData(stateChangedEvent);
    }
}
