import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Configuration } from './config';

@Injectable()
export class DataserviceService {

 constructor(private httpService: Http, public UrlObject: Configuration) { }

 GetComics(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.ComicUrl).map(
      data => data.json()
    );
  }
  GetSeries(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeriesUrl).map(
      data => data.json()
    );
  }
  GetSeason(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.SeasonUrl).map(
      data => data.json()
    );
  }
  GetSearch(SearchParam): Observable<any> {
    console.log(SearchParam);
    return this.httpService.get(this.UrlObject.UrlObj.SearchUrl + SearchParam).map(
      data => data.json()
    );
  }
  GetUsers(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.UsersUrl).map(
      data => data.json()
    );
  }

  PostSeries(Data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
   return this.httpService.post(this.UrlObject.UrlObj.SeriesUrl, Data, headers).map(
     (res: Response) => res.json());
  }
  PostUsers(Data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
   return this.httpService.post(this.UrlObject.UrlObj.UsersUrl, Data, headers).map(
     (res: Response) => res.json());
  }
  PostSeason(Data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
   return this.httpService.post(this.UrlObject.UrlObj.SeasonUrl, Data, headers).map(
     (res: Response) => res.json());
  }
  PostComic(Data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
   return this.httpService.post(this.UrlObject.UrlObj.ComicUrl, Data, headers).map(
     (res: Response) => res.json());
  }
  UpdateUsers(Data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
   return this.httpService.put(this.UrlObject.UrlObj.UsersUrl, Data, headers).map(
     (res: Response) => res.json());
  }
  UpdateSeries(Data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
   return this.httpService.put(this.UrlObject.UrlObj.SeriesUrl, Data, headers).map(
     (res: Response) => res.json());
  }
  UpdateSeason(Data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
   return this.httpService.put(this.UrlObject.UrlObj.SeasonUrl, Data, headers).map(
     (res: Response) => res.json());
  }
  UpdateComic(Data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
   return this.httpService.put(this.UrlObject.UrlObj.ComicUrl, Data, headers).map(
     (res: Response) => res.json());
  }
  
  DeleteUsers(Data){
   
    return this.httpService.delete(this.UrlObject.UrlObj.UsersUrl +'/'+ Data).map(
      (res: Response) => res.json());
  }
  DeleteSeries(Data){
   
    return this.httpService.delete(this.UrlObject.UrlObj.SeriesUrl +'/'+ Data).map(
      (res: Response) => res.json());
  }
  DeleteSeason(Data){
   
    return this.httpService.delete(this.UrlObject.UrlObj.SeasonUrl +'/'+ Data).map(
      (res: Response) => res.json());
  }
  DeleteComic(Data){
   
    return this.httpService.delete(this.UrlObject.UrlObj.ComicUrl +'/'+ Data).map(
      (res: Response) => res.json());
  }
}
