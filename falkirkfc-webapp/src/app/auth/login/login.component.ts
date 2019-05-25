import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
import { User } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';

// decorator configures the component
@Component({
  // html tag selector
  selector: 'app-login',
  // html template
  templateUrl: './login.component.html',
  // and the styles array
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loads the form from the template
  @ViewChild("loginForm") form: NgForm;
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

    // if user is valid
    if(this.form.valid){
      // creates new user
      const user = new User();
      user.setEmail(email)
      user.setPassword(password)

      this.userAuthService.login(user)
          .then( (value: any) => this.userAuthService.navigateLoggedInUser() )
          // catches the error
          .catch( (error: any) => console.error(error) )
    }
  }
}
