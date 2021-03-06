import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryGridComponent } from './country-grid/country-grid.component';
import { ReportsComponent } from './reports/reports.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';

export const appRoutes: Routes = [  
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'country-list/:count', component: CountryListComponent },
          { path: 'country-detail/:id/:operation', component: CountryDetailComponent },
          { path: 'country-grid', component: CountryGridComponent },
          { path: 'reports', component: ReportsComponent },
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];