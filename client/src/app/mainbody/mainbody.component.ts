import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "app/dataservice.service";
import { ExchangeserviceService } from "app/exchangeservice.service";

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
  Season: any;
  Series: any;
  Comics;
  constructor(public myservice: DataserviceService, public exchngservice: ExchangeserviceService) { }
  GetComicsList() {
    this.myservice.GetComics().subscribe(res => {
      this.Comics = res.respData.data;
      console.log(this.Comics);
      this.exchngservice.SendComics(this.Comics);

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }

  ngOnInit() {
    this.GetComicsList();
  }

}
