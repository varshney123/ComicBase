import { Injectable } from '@angular/core';

@Injectable()
export class ExchangeserviceService {
    Users: any;
    Search: any;
    Series: any;
    Season: any;
Comics;
DataObj;
SendComics(Obj) {
    console.log(Obj);
    this.Comics = Obj;
    console.log(this.Comics);
  }


  GetComics() {
    console.log(this.Comics);
    return this.Comics;
  }
  SendData(Obj) {
    console.log(Obj);
    this.DataObj = Obj;
    console.log(this.DataObj);
  }


  GetData() {
    console.log(this.DataObj);
    return this.DataObj;
  }
  SendSeason(Obj) {
    console.log(Obj);
    this.Season = Obj;
    console.log(this.Season);
  }


  GetSeason() {
    console.log(this.Season);
    return this.Season;
  }
  SendSeries(Obj) {
    console.log(Obj);
    this.Series = Obj;
    console.log(this.Series);
  }


  GetSeries() {
    console.log(this.Series);
    return this.Series;
  }

SendSearchResult(Obj) {
    console.log(Obj);
    this.Search = Obj;
    console.log(this.Search);
  }


  GetSearchResult() {
    console.log(this.Search);
    return this.Search;
  }
  SendUsers(Obj){
    console.log(Obj);
    this.Users = Obj;
    console.log(this.Users);
  }
  GetUsers() {
    console.log(this.Users);
    return this.Users;
  }

  constructor() { }

}