import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  router: Router;
  actRoute: ActivatedRoute;
  userService: UsersService;
  user: User;

  constructor(userSrv: UsersService, router: Router, actRoute: ActivatedRoute) {
    this.userService = userSrv;
    this.router = router;
    this.actRoute = actRoute;
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.params.id;
    this.userService.getUser(id).then( (user: User) => this.user = user )
  }

  editUser(){
    this.router.navigate([ "../", "edit", this.user._id ], { relativeTo: this.actRoute })
  }

  deleteUser(){
    this.userService.deleteUser(this.user).then( () => this.router.navigate([ "../"], { relativeTo: this.actRoute }) )
  }

}
