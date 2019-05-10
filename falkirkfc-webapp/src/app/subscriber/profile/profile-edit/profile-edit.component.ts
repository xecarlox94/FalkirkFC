import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
import { User } from 'src/app/core/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  userAuthService: UserAuthService;
  user: User;
  changePassword: boolean = false;

  constructor(userAuthService: UserAuthService) {
    this.userAuthService = userAuthService;
  }

  ngOnInit() {
    this.userAuthService.getCurrentUser().then( (user: User) => {
      this.user = user
      console.log(user)
    })
  }

  onSubmit(profileForm: NgForm){
    console.log(profileForm)
  }
}
