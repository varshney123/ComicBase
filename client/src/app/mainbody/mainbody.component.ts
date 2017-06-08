import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "app/dataservice.service";
import { ExchangeserviceService } from "app/exchangeservice.service";

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
    response: any;
  Season: any;
  Series: any;
  Comics;
  editsub:{
    Subscribers:String,
    _id:String
  }={
    Subscribers:'',
    _id:''

  }
  constructor(public myservice: DataserviceService, public exchngservice: ExchangeserviceService) { }
  
  addid(id){
console.log(id);
this.editsub._id=id;
  }
addemail(email){
  console.log(email);
  this.editsub.Subscribers=email;
  this.editsubscriber(this.editsub);
}  
  editsubscriber(data){

 this.myservice.UpdateEmail(data).subscribe(res => {
      this.response = res.respData.data;
      console.log(this.response);
  //    alert("updated succesfully");
 });
  }
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
 
  ngOnInit() {
    this.GetComicsList();
    this.GetSeriesList();
   

  }

}
