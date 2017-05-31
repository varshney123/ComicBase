import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "app/dataservice.service";
import { ExchangeserviceService } from "app/exchangeservice.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    Comics: any;
comment='';
  constructor(public myservice: DataserviceService,public exchngservice:ExchangeserviceService,public route:Router) { }

  ngOnInit() {
    this.GetComicsList();
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
  CommentComic(data){
console.log(data);
  }

 Logout()
  {
     localStorage.removeItem("role");
     this.route.navigate(['/login']);
  }
    
  

  }

