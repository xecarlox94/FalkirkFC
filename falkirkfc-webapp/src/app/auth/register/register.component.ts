import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
import { Router } from '@angular/router';

// decorator configures the component
@Component({
  // html tag selector
  selector: 'app-register',
  // html template
  templateUrl: './register.component.html',
  // and the styles array
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  // loads the form from the template
  @ViewChild("registerForm") form: NgForm;
  // stores the user service
  userAuthService: UserAuthService;
  // stores the router
  router: Router;
  
  // injects dependencies
  constructor(userAuthSrv: UserAuthService, router: Router) {
    this.userAuthService = userAuthSrv;
    this.router = router;
  }

  ngOnInit() {
    // takes users to their homepages
    this.userAuthService.navigateLoggedInUser()
  }
  
  onSubmit(){
    // sets the form values
    const email = this.form.value.email;
    const password = this.form.value.password;
    const lastName = this.form.value.lastName;
    const firstName = this.form.value.firstName;
    const gender = this.form.value.gender;
    const mobilePhone = this.form.value.mobilePhone;
    const address = this.form.value.address;

    // if user is valid
    if(this.form.valid){
      // creates new user
      const user = new User()
      user.setEmail(email)
      user.setPassword(password)
      user.setContactInfo(firstName, lastName, gender, mobilePhone, address)

      // executes the promise
      this.userAuthService.register(user)
          .then( (newUser: User) => this.userAuthService.navigateLoggedInUser() )
          // catches the error
          .catch( (error: any) => console.error(error) )
    }
  }

}
