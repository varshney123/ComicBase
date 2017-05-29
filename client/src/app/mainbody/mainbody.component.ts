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
  constructor(public myservice: DataserviceService,public exchngservice:ExchangeserviceService) { }
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
  GetSeriesList() {
    this.myservice.GetSeries().subscribe(res => {
      this.Series = res.respData.data;
      console.log(this.Series);
      this.exchngservice.SendSeries(this.Series);

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  GetSeasonList() {
    this.myservice.GetSeason().subscribe(res => {
      this.Season =res.respData.data
      console.log(this.Season);
      this.exchngservice.SendSeason(this.Season);

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
// DisplayComics(item) {
//     console.log(this.Comics[item] + " helllo");
//     this.exchngservice.SendData(this.Comics[item]);
 // }

  ngOnInit() {
    this.GetComicsList();
    this.GetSeasonList();
    this.GetSeriesList();
  }

}
