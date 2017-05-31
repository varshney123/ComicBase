import { Component, OnInit } from '@angular/core';
import { ExchangeserviceService } from "app/exchangeservice.service";
import { DataserviceService } from "app/dataservice.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  base64: any;
  NewComic: {
    Comic_Name: String,
    Comic_Image: String,
    Comic_Data: String,
    Comic_Comments: String,
    Season_ID: Number,
    _id: String

  } = {
    Comic_Name: '',
    Comic_Image: '',
    Comic_Data: '',
    Comic_Comments: '',
    Season_ID: 0,
    _id: ''

  };
  flag: boolean;
  Comic;
  Comic1;
  flag2: boolean;
  constructor(public myservice: DataserviceService, public exchngservice: ExchangeserviceService,public route:Router) { }
  AddComics() {
     this.flag2 = !this.flag2;
    this.myservice.PostComic(this.NewComic).subscribe(data => { console.log(data);
    alert("Added succesfully");
    this.GetComicList(); }
      , errorr => { console.log(errorr) }

    )
    console.log(this.NewComic);
  }
  GetComicList() {
    this.myservice.GetComics().subscribe(res => {
      this.Comic = res.respData.data;
      console.log(this.Comic);
      this.exchngservice.SendComics(this.Comic);

    }
      , errorr => {             // If there is an error it will alert an error.
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
  Logout()
  {
     localStorage.removeItem("role");
     this.route.navigate(['/login']);
  }
  ngOnInit() {
    this.GetComicList();
    this.flag = true;
    this.flag2 = true;
  }

}
