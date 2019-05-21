import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
import { Session } from 'src/app/core/models/session.model';
import { LiveMatchService } from 'src/app/core/services/livestream/live-match.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, OnDestroy {
  matchStatus: {live: boolean, matchStatus: string, _id: string} = null;
  userAuthService: UserAuthService;
  liveMatchService: LiveMatchService;
  sessionSubscription: Subscription;
  matchStatusSubscription: Subscription;
  isHandset: boolean;
  session: Session;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      tap( result => this.isHandset = result.matches ),
      map( result => result.matches )
    );
  
  constructor(private breakpointObserver: BreakpointObserver, userAuthSrv: UserAuthService, liveMatchSrv: LiveMatchService) {
    this.userAuthService = userAuthSrv;
    this.liveMatchService = liveMatchSrv;
  }


  ngOnInit(): void {
    this.sessionSubscription = this.userAuthService.session.subscribe( (session: Session) => this.session = session )
    this.userAuthService.onSessionChanges()
    this.matchStatusSubscription = this.liveMatchService.statusSubject.subscribe( (matchStatus: {live: boolean, matchStatus: string, _id: string}) => {
      this.matchStatus = matchStatus
    })
  }
  

  logout(){
    this.userAuthService.logout()
  }
  
  
  ngOnDestroy(): void {
    this.sessionSubscription.unsubscribe()
    this.matchStatusSubscription.unsubscribe()
  }

}
