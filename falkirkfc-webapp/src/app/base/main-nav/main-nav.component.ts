import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
import { Session } from 'src/app/core/models/session.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, OnDestroy {
  userAuthService: UserAuthService;
  sessionSubscription: Subscription;
  isHandset: boolean;
  session: Session;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      tap( result => this.isHandset = result.matches ),
      map( result => result.matches )
    );
  
  constructor(private breakpointObserver: BreakpointObserver, userAuthSrv: UserAuthService) {
    this.userAuthService = userAuthSrv;
  }


  ngOnInit(): void {
    this.sessionSubscription = this.userAuthService.session.subscribe( (session: Session) => this.session = session )
  }
  

  logout(){
    this.userAuthService.logout()
  }
  
  
  ngOnDestroy(): void {
    this.sessionSubscription.unsubscribe()
  }

}
