import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") form: NgForm;
  userAuthService: UserAuthService;

  constructor(userAuthSrv: UserAuthService) {
    this.userAuthService = userAuthSrv
  }

  ngOnInit() { }

  onSubmit(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    if(this.form.valid){
      const user = new User(email, password)
      this.userAuthService.login(user).subscribe( res => console.log("response: ", res), err => console.log("error:", err))
    }
  }
}
