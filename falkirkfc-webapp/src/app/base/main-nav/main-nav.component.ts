import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  userAuthService: UserAuthService;
  isHandset: boolean;


  constructor(private breakpointObserver: BreakpointObserver, userAuthSrv: UserAuthService) {
    this.userAuthService = userAuthSrv;
  }

  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      tap( result => this.isHandset = result.matches ),
      map( result => result.matches )
    );
  

  logout(){
    this.userAuthService.logout()
  }
  
}
