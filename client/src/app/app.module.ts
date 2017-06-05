import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataserviceService} from './dataservice.service'
import { AppComponent } from './app.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { ExchangeserviceService } from "app/exchangeservice.service";
import { Configuration } from "app/config";
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Router} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllRoutes } from './routes';
import { AuthenticationService } from "app/authentication.service";
import { DisplaysearchComponent } from './displaysearch/displaysearch.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { UserComponent } from './user/user.component';
import { SeriesComponent } from './series/series.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { ComicsComponent } from './comics/comics.component';
import { DatePickerModule } from 'ng2-datepicker';
import { NewtwstComponent } from './newtwst/newtwst.component';

@NgModule({
  declarations: [
    AppComponent,
    MainbodyComponent,
    SearchComponent,
    HeaderComponent,
    AdminComponent,
    LoginComponent,
    DisplaysearchComponent,
    SuperadminComponent,
    UserComponent,
    SeriesComponent,
    SeasonsComponent,
    ComicsComponent,
    NewtwstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     DatePickerModule,
    RouterModule.forRoot(AllRoutes)
  ],
  providers: [DataserviceService,ExchangeserviceService,Configuration,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
