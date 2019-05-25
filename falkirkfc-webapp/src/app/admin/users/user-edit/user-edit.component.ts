import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users/users.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})

export class UserEditComponent implements OnInit {
  actRoute: ActivatedRoute; // activated route object
  router: Router; // router dependency
  userService: UsersService; // user services
  formBuilder: FormBuilder; // form builder
  changePassword: boolean = true;
  userForm: FormGroup; // user form
  user: User; // user variable

  // dependency injection
  constructor(router: Router, actRoute: ActivatedRoute, userSrv: UsersService, formBuilder: FormBuilder) {
    this.router = router;
    this.actRoute = actRoute;
    this.userService = userSrv;
    this.formBuilder = formBuilder;

    // initialize the user form and its validation
    this.userForm = this.formBuilder.group({
      'firstName': [ null, [ Validators.required, Validators.minLength(2), Validators.maxLength(30) ] ],
      'lastName': [ null, [ Validators.required, Validators.minLength(2), Validators.maxLength(30) ] ],
      'password': [ null, [ Validators.required, Validators.minLength(6), Validators.maxLength(15) ] ],
      'gender': [ null, [ Validators.required ] ],
      'mobilePhone': [ null, [ Validators.required ] ],
      'address': [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(30) ] ]
    })
  }


  // component's initial hook
  ngOnInit() {
    // id param stored in a local variable
    const id = this.actRoute.snapshot.params.id;
    // get user promise called
    this.userService.getUser(id)
        .then( (user: User) => {
          // assign the promise result to component's user
          this.user = user;
          // patch value in form
          this.userForm.patchValue(this.user)
          // set password input status
          this.tooglePasswordInput()
        })
        // catch promise error, return to previous page
        .catch( (err) => this.returnToUsersPage() )
  }
  
  onSubmit(){
    const val = this.userForm.value;
    const user = new User(this.user._id)
    user.setContactInfo(val.firstName, val.lastName, val.gender, val.mobilePhone, val.address)
    if(this.userForm.controls["password"].valid) user.setPassword(this.userForm.controls["password"].value)
    this.userService.updateUser(user)
        .then( (user: User) => this.router.navigate( [ "/adminDashboard", "users", user._id ] ) )
        .catch( (err) => this.returnToUsersPage() )
  }


  tooglePasswordInput(){
    this.changePassword = !this.changePassword;
    const passInput = this.userForm.controls['password'];
    if(this.changePassword){
      passInput.enable()
      
    } else {
      passInput.reset()
      passInput.disable()
    }
  }

  returnToUsersPage() {
    this.router.navigate(["/adminDashboard", "users"])
  }

}
