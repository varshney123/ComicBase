import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "app/authentication.service";
import { Router } from "@angular/router";
import { AdminComponent } from '../admin/admin.component'; 
import { SuperadminComponent } from '../superadmin/superadmin.component';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  valid: any;
  send;
  valid2;

  constructor(public auth: AuthenticationService,public router1:Router) {

  }

  ngOnInit() {
  }
  check(form1) {

    
    console.log(form1.value.username);
    console.log(form1.value.password);
   
    this.auth.Postlogin(form1.value).subscribe(res => {
      this.valid =res.respData.data;
      console.log(this.valid);
      console.log(this.valid[0].UserType_ID);
      this.valid2 = this.valid[0].UserType_ID;
      localStorage.setItem('role',this.valid2);
     console.log(localStorage.getItem('role'));
        if (this.valid2 == "superadmin") {
          console.log("superadmin");
          this.router1.navigate(['/superadmin']);

        }
        else if (this.valid2 == "admin") {
          console.log("admin");
          this.router1.navigate(['/admin']);

        }
        else if (this.valid2 == "user") {
          console.log("user");
          this.router1.navigate(['/user']);
        }
    
      else {
        console.log("user does not exist");
      }


    },

      errorr => {
        alert("Error");
      });



  }
}
