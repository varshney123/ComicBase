import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from "app/exchangeservice.service";
import { DataserviceService } from "app/dataservice.service";
import { Router } from "@angular/router";
import {ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
    serid: any;
    seasid: any;
    newid: any;
    id: any;
  Series: any;
  
  Season: any;
  base64: any;
  NewComic: {
    Comic_Name: String,
    Comic_Image: String,
    Comic_Data: String,
    Comic_Comments: String,
    Season_ID: String,
    Series_ID: String,
    _id: String

  } = {
    Comic_Name: '',
    Comic_Image: '',
    Comic_Data: '',
    Comic_Comments: '',
    Season_ID: '',
    Series_ID: '',
    _id: ''

  };
  flag: boolean;
  Comic;
  Comic1;
  flag2: boolean;
  constructor(public activatedid :ActivatedRoute,public myservice: DataserviceService, public exchngservice: ExchangeserviceService, public route: Router) { }
  AddComics() {
    this.NewComic.Series_ID = this.serid;
    this.NewComic.Season_ID = this.seasid;
   // this.newid=series;
    // this.GetSeasonList(this.newid);
    this.flag2 = !this.flag2;
    this.myservice.PostComic(this.NewComic).subscribe(data => {
      console.log(data);
      alert("Added succesfully");
      this.GetComicList();
    }
      , errorr => { console.log(errorr) }

    )
    console.log(this.NewComic);
  }
  // GetSeasonList(data) {
    
  //   this.myservice.GetSeasonSearch(data).subscribe(res => {
  //     console.log(res.respData.data);
  //     console.log(res);
  //     this.Season= res.respData.data;
  //   }, errorr => {             // If there is an error it will alert an error.
  //     alert(errorr);
  //   });
  // }
  GetComicList() {
   
    this.myservice.GetComicSearch(this.seasid).subscribe(res => {
      console.log(res.respData.data);
      console.log(res);
      this.Comic = res.respData.data;
      console.log(this.Comic);
    
     
    }, errorr => {             // If there is an error it will alert an error.
      alert(errorr);
    });
  
  }
  OpenEditTab(data) {
    console.log(data);
    this.flag = !this.flag;
    this.NewComic._id = data;
    console.log(this.NewComic);

  }
  UpdateComic() {
    console.log(this.NewComic);
    this.Edit_Comic(this.NewComic);
    this.flag = !this.flag;
  }
  Edit_Comic(data) {
    console.log(data);
    this.myservice.UpdateComic(data).subscribe(res => {
      this.Comic1 = res.respData.data;
      console.log(this.Comic1);
      alert("Updated succesfully");
      this.GetComicList();

    });
  }
  OpenEditor() {
    this.flag2 = !this.flag2;
  }


  DeleteComic(data) {
    console.log(data);
    this.myservice.DeleteComic(data).subscribe(res => {
      this.Comic = res.respData.data;
      console.log(this.Comic);
      alert("Deleted succesfully");
      this.GetComicList();


    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  changeListener(event) {
    console.log(event.target)
    this.encodeImageFileAsURL(event.target)
  }
  encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = (data => {
      this.base64 = reader.result;
      this.NewComic.Comic_Image = this.base64;
      //console.log('RESULT', reader.result)
    })
    reader.readAsDataURL(file);
    //console.log(this.base64);
  }
  Logout() {
    localStorage.removeItem("role");
    this.route.navigate(['/login']);
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
  GetSeasonlist(){
   
    this.myservice.GetSeason().subscribe(res => {
      this.Season = res.respData.data;
      console.log(this.Season);


    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
  
   
  ngOnInit() {
    this.serid=this.activatedid.snapshot.params['i'];
    this.seasid = this.activatedid.snapshot.params['id'];
    
    this.GetSeasonlist()
    this.GetSeriesList();
    this.GetComicList();
    this.flag = true;
    this.flag2 = true;
  }

}
