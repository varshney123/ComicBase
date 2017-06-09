import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataserviceService } from './dataservice.service'
import { AppComponent } from './app.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { ExchangeserviceService } from "app/exchangeservice.service";
import { Configuration } from "app/config";
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DisplaysearchComponent } from "app/displaysearch/displaysearch.component";
import { SuperadminComponent } from "app/superadmin/superadmin.component";
import { UserComponent } from "app/user/user.component";
import { SeasonsComponent } from "app/seasons/seasons.component";
import { ComicsComponent } from "app/comics/comics.component";
import { AuthenticationService } from "app/authentication.service";

export const AllRoutes =
  [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'admin',
      component: AdminComponent,
      data: [{
        role: 'admin'
      }], canActivate: [AuthenticationService]
    },
    {
      path: '',
      component: MainbodyComponent
    },
    {
      path: 'displaysearch',
      component: DisplaysearchComponent
    },
    {
      path: 'superadmin',
      component: SuperadminComponent,
      data: [{
        role: 'superadmin'
      }], canActivate: [AuthenticationService]
    },

    {
      path: 'user',
      component: UserComponent,
      data: [{
        role: 'user'
      }], canActivate: [AuthenticationService]
    },
    {
      path: 'search',
      component: SearchComponent
    },
    {
      path: 'series',
      component: SearchComponent
    },
    {
      path: 'season/:id',
      component: SeasonsComponent
    },
    {
      path: 'series/:i/season/:id',
      component: ComicsComponent
    }



  ]
