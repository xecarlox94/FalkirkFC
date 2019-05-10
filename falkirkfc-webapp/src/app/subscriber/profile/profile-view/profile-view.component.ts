import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  userAuthService: UserAuthService;
  user: User;

  constructor(userAuthService: UserAuthService) {
    this.userAuthService = userAuthService;
  }

  ngOnInit() {
    this.userAuthService.getCurrentUser().then( (user: User) => this.user = user )
  }

}
