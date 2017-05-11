import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppRemoteDataService } from './services/app-remote-data.service';
import { CountriesService } from "./services/app-grid-data.service";
import { CountryPanelComponent } from './panels/country-panel/country-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
// Import Kendo UI for Angular Components
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ChartPanelComponent } from './panels/chart-panel/chart-panel.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { CountryGridComponent } from './country-grid/country-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    AuthenticatedUserComponent,
    CountryListComponent,
    CountryPanelComponent,
    ImagePanelComponent,
    ChartPanelComponent,
    CountryGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    // Import Kendeo UI controls
    ButtonsModule,
    ChartsModule,
    GridModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,  
    AppRemoteDataService, 
    CountriesService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
