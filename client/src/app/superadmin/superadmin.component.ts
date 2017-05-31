import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "app/dataservice.service";
import { ExchangeserviceService } from "app/exchangeservice.service";
import { Router } from "@angular/router";

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
  constructor(public myservice:DataserviceService,public exchngservice:ExchangeserviceService,public route:Router) { }

  
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
  
  }
  Updateuser(){

    console.log(this.EditUser);
    this.flag=!this.flag;
    this.EditUsers(this.EditUser);
   
    
  }
  EditUsers(data){
console.log(data);
this.myservice.UpdateUsers(data).subscribe(res => {
      this.Users1 = res.respData.data;
      console.log(this.Users1);
      alert("updated succesfully");
      this.flag=!this.flag;
 this.GetUserList();
  });
}
OpenEditor(){
   this.flag2=!this.flag2;
}
AddUser() {
  
    
    this.myservice.PostUsers(this.EditUser).subscribe(data => { console.log(data);this.GetUserList(); }
      , errorr => { console.log(errorr) }
    
    )
   

alert("added succesfully");
     this.flag2=!this.flag2;

  }

  DeleteUsers(data)
  { 
    console.log(data);
     this.myservice.DeleteUsers(data).subscribe(res => {
      this.Users = res.respData.data;
      
  alert("deleted succesfully");
 this.GetUserList();
     

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  Logout()
  {
     localStorage.removeItem("role");
     this.route.navigate(['/login']);
  }
  
  ngOnInit() {
    this.GetUserList();
    this.flag=true;
    this.flag2=true;
  }
}
