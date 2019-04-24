import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild("registerForm") form: NgForm;
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

      this.userAuthService.register(user)
        .subscribe( res => {
          console.log("response", res)
          localStorage.setItem("token", res.token)
          this.router.navigate(["/about"])
        }, err => console.log("ERROR:", err))
    }
  }
}