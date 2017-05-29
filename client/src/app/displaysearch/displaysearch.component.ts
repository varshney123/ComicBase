import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from "app/exchangeservice.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-displaysearch',
  templateUrl: './displaysearch.component.html',
  styleUrls: ['./displaysearch.component.css']
})
export class DisplaysearchComponent implements OnInit {
  searchResults: any;
  constructor(public send: ExchangeserviceService, public route2: Router) { }
  newSearch() {
    this.route2.navigate(['/search']);
  }


  ngOnInit() {
    this.searchResults = this.send.GetSearchResult();
    console.log(this.searchResults);

  }

}
