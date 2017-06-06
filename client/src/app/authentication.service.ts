import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Configuration } from './config';
import { Observable } from 'rxjs/Observable';
import { DataserviceService } from "app/dataservice.service";

@Injectable()
export class AuthenticationService implements CanActivate {
  token;

  canActivate(route: ActivatedRouteSnapshot) {
    var x = route.data;
    console.log(localStorage.getItem("role"));
    if (x[0].role == localStorage.getItem("role")) {

      return true;

    }
    else {
      return false;
    }

  }
  details: {
    username: string,
    password: string
  }
  a;
  public data;
  public check;
  static value;
  constructor(public router1: Router, public auth: DataserviceService, public httpService: Http, public UrlObject: Configuration) { }

  isLoggedin(): Boolean {
    this.token = localStorage.getItem("myToken");
    //  console.log(this.token);
    if (!this.token) {
      // console.log("false");
      return false;
    }
    else {
      //  console.log("true");
      return true;
    }

  }

  Postlogin(details): Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.UrlObject.UrlObj.CheckUrl, details, headers).map(
      (res: Response) => res.json());

  }

}
