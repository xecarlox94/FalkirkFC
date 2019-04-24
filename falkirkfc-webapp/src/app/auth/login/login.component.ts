import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { User } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") form: NgForm;
  userAuthService: UserAuthService;
  router: Router;

  constructor(userAuthSrv: UserAuthService, router: Router) {
    this.userAuthService = userAuthSrv;
    this.router = router;
  }

  ngOnInit() { }

  onSubmit(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    if(this.form.valid){
      const user = new User(email, password)
      this.userAuthService.login(user)
        .subscribe( res => {
          console.log("response", res)
          localStorage.setItem("token", res.token)
          this.router.navigate(["/fqa"])
        }, err => console.log("ERROR:", err))
    }
  }
}
