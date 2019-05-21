import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
import { Session } from 'src/app/core/models/session.model';
import { LiveMatchService } from 'src/app/core/services/livestream/live-match.service';
import { MatchStream } from 'src/app/core/models/matchStream.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, OnDestroy {
  userAuthService: UserAuthService;
  sessionSubscription: Subscription;
  liveMatchSubscription: Subscription;
  liveMatchService: LiveMatchService;
  isHandset: boolean;
  isMatchLive: boolean;
  session: Session;
  matchStream: MatchStream;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      tap( result => this.isHandset = result.matches ),
      map( result => result.matches )
    );
  
  constructor(private breakpointObserver: BreakpointObserver, userAuthSrv: UserAuthService, liveMatchSrv: LiveMatchService) {
    this.userAuthService = userAuthSrv;
    this.liveMatchService = liveMatchSrv;
    this.isMatchLive = false;
  }


  ngOnInit(): void {
    this.sessionSubscription = this.userAuthService.session.subscribe( (session: Session) => this.session = session )
    this.userAuthService.onSessionChanges()
    this.liveMatchSubscription = this.liveMatchService.liveMatchSubject
                                     .subscribe( (matchStream: MatchStream) => {
                                       this.matchStream = matchStream
                                       console.log(matchStream)
                                       if(matchStream.live) this.isMatchLive = true
                                       else this.isMatchLive = false
                                      })
  }
  

  logout(){
    this.userAuthService.logout()
  }
  
  
  ngOnDestroy(): void {
    this.sessionSubscription.unsubscribe()
    this.liveMatchSubscription.unsubscribe()
  }

}
