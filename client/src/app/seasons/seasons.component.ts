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
  date: DateModel;
  options: DatePickerOptions;
NewSeason:{
   Season_Name: String,
   _id:String,
    Season_Data: String,
    Season_ID: Number,
    Starts_On: String,
    Ends_On: String
  } = {
    _id:'',
    Season_Name: '',
    Season_Data: '',
    Season_ID: 0,
    Starts_On: Date(),
    Ends_On: Date()
};
flag: boolean;
Season;
Season1;
flag2:boolean;
  constructor(public myservice:DataserviceService,public exchngservice:ExchangeserviceService,public route3:Router) {
     this.options = new DatePickerOptions();
   }
AddSeason() {
  //  this.NewSeries.Series_ID = id;
  console.log(this.NewSeason.Starts_On)
    this.myservice.PostSeason(this.NewSeason).subscribe(data => { console.log(data);
      alert("succesfully added");
    this.GetSeasonList();
   }
      , errorr => { console.log(errorr) }

    )
    console.log(this.NewSeason);
   
  }
GetSeasonList() {
    this.myservice.GetSeason().subscribe(res => {
      this.Season = res.respData.data;
      console.log(this.Season);
      this.exchngservice.SendSeason(this.Season);

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  OpenEditTab(data){
    console.log(data);
    this.flag=!this.flag;
    
    this.NewSeason._id=data;
   console.log(this.NewSeason);
   
  }
  UpdateSeason(){
    this.flag=!this.flag;
    console.log(this.NewSeason);
    this.Edit_Season(this.NewSeason);
  }
Edit_Season(data){
console.log(data);
this.myservice.UpdateSeason(data).subscribe(res => {
      this.Season1 = res.respData.data;
      console.log(this.Season1);
      alert("updated succesfully");

    this.GetSeasonList();
      
  });
}
OpenEditor(){
   this.flag2=!this.flag2;
   
}
Proceed(){
 this.route3.navigate(['/comics']);
}


  DeleteSeason(data)
  { 
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
  ngOnInit() {
    this.GetSeasonList();
    this.flag=true;
    this.flag2=true;
  }

}
