import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from "app/exchangeservice.service";
import { DataserviceService } from "app/dataservice.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    
  constructor(public myservice: DataserviceService,public exchngservice:ExchangeserviceService) { }

  ngOnInit() {
    

  }

}
