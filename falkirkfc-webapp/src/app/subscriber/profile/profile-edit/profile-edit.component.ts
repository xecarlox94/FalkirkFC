import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
import { User } from 'src/app/core/models/user.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  formBuilder: FormBuilder;
  profileForm: FormGroup;
  router: Router;
  changePassword: boolean = true;
  changeStatus: boolean = true;
  userAuthService: UserAuthService;
  user: User;

  constructor(userAuthService: UserAuthService, formBuilder: FormBuilder, router: Router) {
    this.router = router;
    this.userAuthService = userAuthService;
    this.formBuilder = formBuilder;
    this.profileForm = this.formBuilder.group({
      "password": [ null ],
      "admin": [ null ],
      "secret": [ null ],
      "firstName": [ null, [ Validators.required, Validators.minLength(2), Validators.maxLength(30) ] ],
      "lastName": [ null, [ Validators.required, Validators.minLength(2), Validators.maxLength(30) ] ],
      "gender": [ null, Validators.required ],
      "mobilePhone": [ null, Validators.required ],
      "address": [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(30) ] ]
    })
  }

  ngOnInit() {
    this.profileForm.controls["secret"].disable()
    this.profileForm.controls["admin"].disable()
    this.profileForm.controls["password"].disable()
    this.userAuthService.getCurrentUser().then( (user: User) => {
      this.user = user
      this.formInit()
    })
  }

  onSubmit(){
    const user = new User();

    if(this.changePassword) user.setPassword(this.profileForm.value.password)
    if(this.changeStatus) {
      user.setAdmin(this.profileForm.value.admin)
      user.setSecret(this.profileForm.value.secret)
    }

    user.setContactInfo(this.profileForm.value.firstName, this.profileForm.value.lastName, this.profileForm.value.gender, this.profileForm.value.mobilePhone, this.profileForm.value.address)
    this.userAuthService.updateCurrentUser(user)
        .then( (updatedUser) => {
          if( updatedUser.admin && !this.user.admin || !updatedUser.admin && this.user.admin ) this.userAuthService.logoutAll()
          else this.router.navigate(["/dashboard", "profile"])
        } )
        .catch( (err) => this.router.navigate(["/dashboard", "profile"]) )
  }

  formInit(){
    this.setInitialValues()
    this.onChangePassword()
    this.onChangeStatus()
  }

  setInitialValues(){
    this.profileForm.controls["firstName"].setValue(this.user.firstName)
    this.profileForm.controls["lastName"].setValue(this.user.lastName)
    this.profileForm.controls["mobilePhone"].setValue(this.user.mobilePhone)
    this.profileForm.controls["gender"].setValue(this.user.gender)
    this.profileForm.controls["address"].setValue(this.user.address)
  }

  onChangeStatus(){
    this.changeStatus = !this.changeStatus;
    const adminControl = this.profileForm.controls["admin"];
    const secretControl = this.profileForm.controls["secret"];
    if(this.changeStatus){
      secretControl.enable()
      adminControl.enable()
      secretControl.setValidators([ Validators.required, Validators.minLength(4) ])
      adminControl.setValue(this.user.admin)
    } else {
      adminControl.reset()
      secretControl.reset()
      secretControl.disable()
      adminControl.disable()
    }
  }

  onChangePassword(){
    this.changePassword = !this.changePassword;
    const passwordControl = this.profileForm.controls["password"];
    if(this.changePassword){
      passwordControl.enable()
      passwordControl.setValidators([ Validators.required, Validators.minLength(6), Validators.maxLength(15) ])
    } else {
      passwordControl.reset()
      passwordControl.disable()
    }
  }
  
}
