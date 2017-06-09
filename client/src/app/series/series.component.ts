import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from "app/exchangeservice.service";
import { DataserviceService } from "app/dataservice.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
    serid: any;
    seriesid: any;
  id: any;
  results: any;
  flag: boolean;
  Series;
  Series1;
  flag2: boolean;
  EditSeries: {
    Series_ID: Number,
    _id: String,
    Series_Name: String,
    Series_Data: String
  } = {
    _id: '',
    Series_ID: 0,
    Series_Name: '',
    Series_Data: ''
  };

  constructor(public router: Router, public myservice: DataserviceService, public exchngservice: ExchangeserviceService, public route2: Router) { }
  GetSeriesList() {
    this.myservice.GetSeries().subscribe(res => {
      this.Series = res.respData.data;
      

      console.log(this.Series.seriesid);
      this.exchngservice.SendSeries(this.Series);

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  OpenEditTab(data) {
    console.log(data);
    this.flag = !this.flag;
    this.EditSeries._id = data;
    console.log(this.EditSeries);
    // this.EditUsers(this.EditUser);
  }
  UpdateSeries() {
    this.flag = !this.flag;
    console.log(this.EditSeries);
    this.Edit_Series(this.EditSeries);
  }
  Edit_Series(data) {
    console.log(data);
    this.myservice.UpdateSeries(data).subscribe(res => {
      this.Series1 = res.respData.data;
      console.log(this.Series1);
      alert("updated succesfully");
      this.GetSeriesList();

    });
  }
  OpenEditor() {
    this.flag2 = !this.flag2;
  }
  AddSeries() {
    //  this.NewSeries.Series_ID = id;
    this.flag2 = !this.flag2;
    this.myservice.PostSeries(this.EditSeries).subscribe(data => {
      console.log(data);
      this.GetSeriesList();

    }
      , errorr => { console.log(errorr) }

    )
    console.log(this.EditSeries);

  }

  DeleteSeries(data) {
    console.log(data);
    this.myservice.DeleteSeries(data).subscribe(res => {
      this.Series = res.respData.data;
      console.log(this.Series);
      alert("Deleted");
      this.GetSeriesList();

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  
  Seriesid(data) {

    console.log(data);
    this.serid = data;
   // this.exchngservice.Sendid(this.id);
     this.router.navigate(['/season',this.serid]);
  }
  

  ngOnInit() {
    this.GetSeriesList();
    this.flag = true;
    this.flag2 = true;
  }


}
