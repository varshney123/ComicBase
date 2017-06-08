import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Configuration } from './config';

@Injectable()
export class DataserviceService {

  constructor(private httpService: Http, public UrlObject: Configuration) { }

  GetComics(): Observable<any> {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.UrlObject.UrlObj.ComicUrl, options).map(
      data => data.json()
    );
  }
  GetSeries(): Observable<any> {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.UrlObject.UrlObj.SeriesUrl, options).map(
      data => data.json()
    );
  }
  GetSeason(): Observable<any> {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.UrlObject.UrlObj.SeasonUrl, options).map(
      data => data.json()
    );
  }
  GetSeasonSearch(param): Observable<any> {
    console.log(param);
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.UrlObject.UrlObj.SeasonSearchUrl + param, options).map(
      data => data.json()
    );
  }
  GetComicSearch(param): Observable<any> {
    console.log(param);
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.UrlObject.UrlObj.ComicSearchUrl + param, options).map(
      data => data.json()
    );
  }
  GetCommentSearch(param): Observable<any> {
    console.log(param);
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.UrlObject.UrlObj.SearchCommentsUrl + param, options).map(
      data => data.json()
    );
  }
  GetSearch(SearchParam): Observable<any> {
    console.log(SearchParam);
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.UrlObject.UrlObj.SearchUrl + SearchParam, options).map(
      data => data.json()
    );
  }

  GetUsers(): Observable<any> {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.UrlObject.UrlObj.UsersUrl, options).map(
      data => data.json()
    );
  }

  PostSeries(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post(this.UrlObject.UrlObj.SeriesUrl, Data, options).map(
      (res: Response) => res.json());
  }
  PostUsers(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post(this.UrlObject.UrlObj.UsersUrl, Data, options).map(
      (res: Response) => res.json());
  }
  PostSeason(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post(this.UrlObject.UrlObj.SeasonUrl, Data, options).map(
      (res: Response) => res.json());
  }
  PostComic(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post(this.UrlObject.UrlObj.ComicUrl, Data, options).map(
      (res: Response) => res.json());
  }
  PostComments(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post(this.UrlObject.UrlObj.CommentsUrl, Data, options).map(
      (res: Response) => res.json());
  }
  UpdateUsers(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.put(this.UrlObject.UrlObj.UsersUrl, Data, options).map(
      (res: Response) => res.json());
  }
  UpdateSeries(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.put(this.UrlObject.UrlObj.SeriesUrl, Data, options).map(
      (res: Response) => res.json());
  }
  UpdateSeason(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.put(this.UrlObject.UrlObj.SeasonUrl, Data, options).map(
      (res: Response) => res.json());
  }
  UpdateComic(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.put(this.UrlObject.UrlObj.ComicUrl, Data, options).map(
      (res: Response) => res.json());
  }
  UpdateEmail(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.put(this.UrlObject.UrlObj.UpdateEmailUrl, Data, options).map(
      (res: Response) => res.json());
  }

  DeleteUsers(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.delete(this.UrlObject.UrlObj.UsersUrl + '/' + Data, options).map(
      (res: Response) => res.json());
  }
  DeleteSeries(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.delete(this.UrlObject.UrlObj.SeriesUrl + '/' + Data, options).map(
      (res: Response) => res.json());
  }
  DeleteSeason(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.delete(this.UrlObject.UrlObj.SeasonUrl + '/' + Data, options).map(
      (res: Response) => res.json());
  }
  DeleteComic(Data) {
    console.log(localStorage.getItem('myToken'));
    var token = localStorage.getItem('myToken');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.delete(this.UrlObject.UrlObj.ComicUrl + '/' + Data, options).map(
      (res: Response) => res.json());
  }
}
