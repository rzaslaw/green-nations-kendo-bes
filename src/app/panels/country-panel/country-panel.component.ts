import { Component, Input, OnInit } from '@angular/core';

import { Countries } from '../../view-models/Countries';

@Component({
  selector: 'app-country-panel',
  templateUrl: './country-panel.component.html',
  styleUrls: ['./country-panel.component.css']
})
export class CountryPanelComponent implements OnInit {

  @Input() country: Countries;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }

}
