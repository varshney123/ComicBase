import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "app/dataservice.service";
import { ExchangeserviceService } from "app/exchangeservice.service";
import { Router } from "@angular/router";
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  results: any;
  id = "";
  Series = [];
  date: DateModel;
  options: DatePickerOptions;
  NewSeason: {
    Season_Name: String,
    _id: String,
    Season_Data: String,
    Season_ID: Number,
    Starts_On: String,
    Ends_On: String,
    Series_ID: String
  } = {
    _id: '',
    Season_Name: '',
    Season_Data: '',
    Season_ID: 0,
    Starts_On: '',
    Ends_On: '',
    Series_ID: ''
  };
  Starts_On: {
    formatted: String
  } = {
    formatted: ''
  }
  Ends_On: {
    formatted: String
  } = {
    formatted: ''
  }
  flag: boolean;
  Season;
  Season1;
  flag2: boolean;
  constructor(public router: Router, public myservice: DataserviceService, public exchngservice: ExchangeserviceService, public route3: Router) {
    this.options = new DatePickerOptions();
  }
  AddSeason(data) {
    this.NewSeason.Series_ID = data;
    console.log(this.Starts_On);
    this.NewSeason.Starts_On = this.Starts_On.formatted;
    this.NewSeason.Ends_On = this.Ends_On.formatted;
    console.log(data);

    this.myservice.PostSeason(this.NewSeason).subscribe(data => {
      console.log(data);
      alert("succesfully added");
      this.GetSeasonList();
    }
      , errorr => { console.log(errorr) }

    )
    console.log(this.NewSeason);

  }
  GetSeasonList() {
    this.Season=this.exchngservice.GetSeasonResult();
      
     
    
    //  this.Season = res.respData.data;
    console.log(this.Season);
    // this.exchngservice.SendSeason(this.Season);

  }
  //  GetAllSeasons(){
  //    this.myservice.GetSeason().subscribe(res => {
  //       this.Season= res.respData.data;
  //       console.log(this.Season);
  //       this.exchngservice.SendSeason(this.Season);

  //     }
  //       , errorr => {             // If there is an error it will alert an error.
  //         alert(errorr);
  //       });

  //  }   
  Seasonid(data) {

    console.log(data);
    this.id = data;
    this.getcomics();
  }
  getcomics() {
    this.myservice.GetComicSearch(this.id).subscribe(res => {
      console.log(res.respData.data);
      console.log(res);
      this.results = res.respData.data;
      console.log(this.results);
      this.exchngservice.SendComicResult(this.results);
      // console.log(this.results);
      this.router.navigate(['/comics']);
    }, errorr => {             // If there is an error it will alert an error.
      alert(errorr);
    });
  }



  OpenEditTab(data) {

    console.log(data);
    this.flag = !this.flag;

    this.NewSeason._id = data;
    console.log(this.NewSeason);

  }
  UpdateSeason() {
    this.flag = !this.flag;
    console.log(this.NewSeason);
    this.Edit_Season(this.NewSeason);
  }
  Edit_Season(data) {
    console.log(data);
    this.myservice.UpdateSeason(data).subscribe(res => {
      this.Season1 = res.respData.data;
      console.log(this.Season1);
      alert("updated succesfully");

      this.GetSeasonList();

    });
  }
  OpenEditor() {
    this.flag2 = !this.flag2;

  }
  // Proceed(){
  // // this.GetAllSeasons();

  //  this.route3.navigate(['/comics']);

  // }


  DeleteSeason(data) {
    console.log(data);
    this.myservice.DeleteSeason(data).subscribe(res => {
      this.Season = res.respData.data;
      console.log(this.Season);
      alert("deleted succesfully");
      this.GetSeasonList();


    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  GetSeriesList() {
    this.myservice.GetSeries().subscribe(res => {
      this.Series = res.respData.data;
      console.log(this.Series);


    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
   
  }
  ngOnInit() {
    //this.GetSeasonList();
    this.GetSeriesList();
    // this.GetAllSeasons();
    this.flag = true;
    this.flag2 = true;
  }

}
