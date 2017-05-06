import { Component, OnInit } from '@angular/core';
import { AppRemoteDataService } from '../../services/app-remote-data.service';
import { Countries } from '../../view-models/Countries';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.css']
})
export class ChartPanelComponent {

  private topTenCountries:Observable<any>;
  private take : number = 10;

  constructor(private dataService: AppRemoteDataService) {
    this.topTenCountries = this.dataService.getCountries(this.take);
   }
}
