import { Component, OnInit } from '@angular/core';
import { CoolHttp } from 'angular2-cool-http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  coolHttp: CoolHttp;
  constructor(coolHttp: CoolHttp)
  {this.coolHttp = coolHttp;   
  }
  title = 'app works!';
  async ngOnInit() {
    let response = await this.coolHttp.getAsync('http://192.168.14.144:4000/api/v1/comics');
  }
}
