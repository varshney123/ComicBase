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
    flag: boolean;
Series;
 Series1;
     flag2:boolean;
EditSeries:{
    Series_ID:Number,
    _id:String,
    Series_Name: String,
    Series_Data: String
  } = {
    _id:'',
    Series_ID:0,
    Series_Name: '',
    Series_Data: ''        
};

  constructor(public myservice:DataserviceService,public exchngservice:ExchangeserviceService,public route2:Router) { }
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
  OpenEditTab(data){
    console.log(data);
    this.flag=!this.flag;
    this.EditSeries._id=data;
   console.log(this.EditSeries);
   // this.EditUsers(this.EditUser);
  }
  UpdateSeries(){
    console.log(this.EditSeries);
    this.Edit_Series(this.EditSeries);
  }
Edit_Series(data){
console.log(data);
this.myservice.UpdateSeries(data).subscribe(res => {
      this.Series1 = res.respData.data;
      console.log(this.Series1);
      alert("updated succesfully");

  });
}
OpenEditor(){
   this.flag2=!this.flag2;
}
AddSeries() {
  //  this.NewSeries.Series_ID = id;
    this.flag=!this.flag;
    this.myservice.PostSeries(this.EditSeries).subscribe(data => { console.log(data); }
      , errorr => { console.log(errorr) }
    
    )
    console.log(this.EditSeries);
    this.route2.navigate(['/season']);
  }

  DeleteSeries(data)
  { 
    console.log(data);
     this.myservice.DeleteSeries(data).subscribe(res => {
      this.Series = res.respData.data;
      console.log(this.Series);
     

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  
  ngOnInit() {
    this.GetSeriesList();
    this.flag=true;
    this.flag2=true;
  }


}
