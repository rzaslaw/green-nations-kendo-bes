import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppRemoteDataService } from '../services/app-remote-data.service';
import { Countries } from '../view-models/countries';

// Kendo UI Grid Requirements
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-country-grid',
  templateUrl: './country-grid.component.html',
  styleUrls: ['./country-grid.component.css']
})
export class CountryGridComponent implements OnInit {

  countries : Array<Countries>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;
  take: number = 180;

    private sort: SortDescriptor[] = [{ field: "rank", dir: "asc" }];
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


  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createCountry() {
    this.router.navigate(['/authenticated/country-detail', 0, 'create']);
  }

  // deleteCountry(id: number) {
  //   this.isDeleting = true;
  //   this.dataService.deleteCountry(id).subscribe(
  //     c => this.cancelDelete(),
  //     err => { this.deleteError = err; this.isDeleting = false; }
  //     );
  // }

  deleteCountryQuestion(id:number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editCountry(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'edit']);
  }

  showCountryDetail(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'details']);
  }

}