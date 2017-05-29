import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service'
import { Router } from '@angular/router';
import { ExchangeserviceService } from "app/exchangeservice.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchItem;
  GetSearch;
  constructor(public search: DataserviceService, public router: Router, public searchdata: ExchangeserviceService) { }
  SearchDb() {
    this.search.GetSearch(this.SearchItem).subscribe(res => {
      this.GetSearch = res.respData.data;
      console.log(this.GetSearch);
      this.searchdata.SendSearchResult(this.GetSearch);
      console.log(this.GetSearch);
      this.router.navigate(['/displaysearch']);
    } , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  

  }
  ngOnInit() {
  }

}
