import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userAuthService: UserAuthService;
  @ViewChild("registerForm") form: NgForm;

  constructor(userAuthSrv: UserAuthService) {
    this.userAuthService = userAuthSrv;
  }

  ngOnInit() { }
  
  onSubmit(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    if(this.form.valid){
      const user = new User(email, password)
      this.userAuthService.register(user).subscribe( res => console.log("response:", res))
    }
  }
}
