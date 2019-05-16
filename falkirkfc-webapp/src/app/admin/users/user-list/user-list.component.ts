import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { User } from 'src/app/core/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  router: Router;
  actRoute: ActivatedRoute;
  userService: UsersService;
  users: User[];

  constructor(usersSrv: UsersService, router: Router, actRoute: ActivatedRoute) {
    this.userService = usersSrv;
    this.router = router;
    this.actRoute = actRoute;
  }

  ngOnInit() {
    this.userService.getUsers().then( (users: User[]) => this.users = users )
  }
  


}
