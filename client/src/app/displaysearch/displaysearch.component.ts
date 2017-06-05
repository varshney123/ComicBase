import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from "app/exchangeservice.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-displaysearch',
  templateUrl: './displaysearch.component.html',
  styleUrls: ['./displaysearch.component.css']
})
export class DisplaysearchComponent implements OnInit {
    search: any;
  searchResults: any;
  flag:boolean;
  constructor(public send: ExchangeserviceService, public route2: Router) { }
  // newSearch() {
  //   this.route2.navigate(['/search']);
  // }


  ngOnInit() {
    this.flag=true;
    this.search = this.send.GetSearchResult();
    console.log(this.search.status);
    if((this.search.status)==true){
      this.searchResults=this.search.respData.data;
    }
    else{
this.flag=!this.flag;

    }
 console.log(this.searchResults);
    }
   

  }


