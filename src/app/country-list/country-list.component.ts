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
  count = 0;
  // countries: Observable<any>;

  constructor(private dataService: AppRemoteDataService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.count = params['count'];

      this.dataService.getCountries(this.count).subscribe(
        countries => {this.allCountries = countries;}
      );        
    });
  }
}