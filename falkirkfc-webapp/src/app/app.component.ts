import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserAuthService } from './core/services/users/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userAuthService: UserAuthService;

  constructor(userAuthSrv: UserAuthService){
    this.userAuthService = userAuthSrv;
  }
  
  ngOnInit(): void {
    this.userAuthService.onSessionChanges()
  }

}
