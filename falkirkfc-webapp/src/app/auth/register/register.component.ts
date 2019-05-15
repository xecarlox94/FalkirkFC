import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
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

  ngOnInit() {
    this.userAuthService.navigateLoggedInUser()
  }
  
  onSubmit(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    const lastName = this.form.value.lastName;
    const firstName = this.form.value.firstName;
    const gender = this.form.value.gender;
    const mobilePhone = this.form.value.mobilePhone;
    const address = this.form.value.address;
    if(this.form.valid){
      const user = new User()
      user.setEmail(email)
      user.setPassword(password)
      user.setContactInfo(firstName, lastName, gender, mobilePhone, address)
      this.userAuthService.register(user).then( (newUser: User) => {
        console.log(newUser)
        this.userAuthService.navigateLoggedInUser()
      })
    }
  }

}
