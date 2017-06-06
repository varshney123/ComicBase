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
  GetSearch = [];
  SearchItem: any;
  Comics: any;
  comment = '';
  data: {
    Comic_ID: String,
    Comment: String

  } = {
    Comic_ID: '',
    Comment: ''
  }
  constructor(public myservice: DataserviceService, public exchngservice: ExchangeserviceService, public route: Router) { }

  ngOnInit() {
    this.GetComicsList();
  }
  GetComicsList() {
    this.myservice.GetComics().subscribe(res => {
      this.Comics = res.respData.data;
      this.SearchItem = this.Comics._id;
      console.log(this.SearchItem);
      this.SearchComment();

      console.log(this.Comics);
      this.exchngservice.SendComics(this.Comics);
      // this.SearchComment();

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  CommentComic(comment, id) {

    console.log(comment);
    console.log(id);
    this.data.Comic_ID = comment;
    this.data.Comment = id;

    this.myservice.PostComments(this.data).subscribe(data => { console.log(data); }
      , errorr => { console.log(errorr) }

    )
    alert("comment posted");
  }
  SearchComment() {
    console.log(this.SearchItem);
    this.myservice.GetCommentSearch(this.SearchItem).subscribe(res => {
      //  console.log(res);
      this.GetSearch = res.respData.data;
      //  this.GetSearch = this.GetSearch[0];
      console.log(this.GetSearch);

    }, errorr => {             // If there is an error it will alert an error.
      alert(errorr);
    });


  }
  Logout() {
    localStorage.removeItem("role");
    this.route.navigate(['/login']);
  }



}

