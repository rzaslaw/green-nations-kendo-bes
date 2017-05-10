import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppRemoteDataService } from '../services/app-remote-data.service';
import { Countries } from '../view-models/countries';

// Kendo UI Grid Requirements
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-country-grid',
  templateUrl: './country-grid.component.html',
  styleUrls: ['./country-grid.component.css']
})
export class CountryGridComponent implements OnInit {

    private countries : Array<Countries>;
    private gridView: GridDataResult;
    private data: Object[];

    private pageSize: number = 10;
    private skip: number = 0;
    private take: number = 180;
    private field: string = "epiIndex";
    private sortDir: number = -1;
 
  constructor(private dataService: AppRemoteDataService,
              private router: Router) { }

  ngOnInit(){
      this.dataService.getCountries(this.take, this.field, this.sortDir).subscribe((data) => { 
            this.countries = data;
            this.bindGrid();   
      }); 
  }

  private bindGrid(): void {
      this.gridView = {
            data: this.countries.slice(this.skip, this.skip + this.pageSize),
            total: this.countries.length
      };
  }

   protected pageChange(event: PageChangeEvent): void {
       this.skip = event.skip;
       this.bindGrid();
   }
}