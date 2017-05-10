import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppRemoteDataService } from '../services/app-remote-data.service';
import { Countries } from '../view-models/Countries';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  allCountries: Array<Countries>;
  private count = 0;
  private field: string = "epiIndex";
  private sortDir = -1;

  // countries: Observable<any>;

  constructor(private dataService: AppRemoteDataService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.count = params['count'];

      this.dataService.getCountries(this.count, this.field, this.sortDir).subscribe(
        countries => {this.allCountries = countries;}
      );        
    });
  }
}