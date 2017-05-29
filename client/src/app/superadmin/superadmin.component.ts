import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "app/dataservice.service";
import { ExchangeserviceService } from "app/exchangeservice.service";

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
    Users1: any;
    Users: any;
    flag:boolean;
     flag2:boolean;
EditUser:{
    username:String,
    password: String,
    UserType_ID: String
  } = {
    username:'',
    password: '',
    UserType_ID: ''        
};
  constructor(public myservice:DataserviceService,public exchngservice:ExchangeserviceService) { }

  
GetUserList() {
    this.myservice.GetUsers().subscribe(res => {
      this.Users = res.respData.data;
      console.log(this.Users);
      this.exchngservice.SendUsers(this.Users);

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  
  OpenEditTab(data){
    console.log(data);
    this.flag=!this.flag;
    this.EditUser.username=data;
   console.log(this.EditUser);
   // this.EditUsers(this.EditUser);
  }
  Updateuser(){
    console.log(this.EditUser);
    this.EditUsers(this.EditUser);
  }
  EditUsers(data){
console.log(data);
this.myservice.UpdateUsers(data).subscribe(res => {
      this.Users1 = res.respData.data;
      console.log(this.Users1);
      alert("updated succesfully");

  });
}
OpenEditor(){
   this.flag2=!this.flag2;
}
AddUser() {
 
    this.flag=!this.flag;
    this.myservice.PostUsers(this.EditUser).subscribe(data => { console.log(data); }
      , errorr => { console.log(errorr) }

    )
    console.log(this.EditUser);
this.GetUserList();
  }

  DeleteUsers(data)
  { 
    console.log(data);
     this.myservice.DeleteUsers(data).subscribe(res => {
      this.Users = res.respData.data;
      console.log(this.Users);
     

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  
  ngOnInit() {
    this.GetUserList();
    this.flag=true;
    this.flag2=true;
  }
}
