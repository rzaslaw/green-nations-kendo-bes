import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppRemoteDataService } from '../services/app-remote-data.service';
import { Countries } from '../view-models/countries';

// Kendo UI Grid Requirements
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {

  countries : Array<Countries>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;
  take: number = 180;

    private sort: SortDescriptor[] = [{"dir":"asc", "field":"rank"}];
    private gridView: GridDataResult;
 
  constructor(private dataService: AppRemoteDataService,
              private router: Router) { }

  ngOnInit(){
    this.dataService.getCountries(this.take).subscribe((data) => { 
      this.countries = data;
      this.loadCountries();    
  });

  }

  protected sortChange(sort: SortDescriptor[]): void {
      this.sort = sort;
      this.loadCountries();
  }

  private loadCountries(): void {
      this.gridView = {
          data: orderBy(this.countries, this.sort),
          total: this.countries.length
      };
  }
}