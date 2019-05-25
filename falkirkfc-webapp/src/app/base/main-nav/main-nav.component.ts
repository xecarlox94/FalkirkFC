import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserAuthService } from 'src/app/core/services/users/user-auth.service';
import { Session } from 'src/app/core/models/session.model';
import { LiveMatchService } from 'src/app/core/services/livestream/live-match.service';

// decorator configures the component
@Component({
  // html tag selector
  selector: 'app-main-nav',
  // html template
  templateUrl: './main-nav.component.html',
  // and the styles array
  styleUrls: ['./main-nav.component.scss']
})


export class MainNavComponent implements OnInit, OnDestroy {
  userAuthService: UserAuthService; // user authentication service
  liveMatchService: LiveMatchService; // live match authentication service

  sessionSubscription: Subscription; // stores session subscription to unsubscribe on destroy
  matchStatusSubscription: Subscription; // stores match status subscription to unsubscribe on destroy

  isHandset: boolean;
  session: Session;
  matchStatus: {live: boolean, matchStatus: string, _id: string} = null;

  // observes if the view is an handset device
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      tap( result => this.isHandset = result.matches ),
      map( result => result.matches )
    );
  
  // dependency injection
  constructor(private breakpointObserver: BreakpointObserver, userAuthSrv: UserAuthService, liveMatchSrv: LiveMatchService) {
    this.userAuthService = userAuthSrv;
    this.liveMatchService = liveMatchSrv;
  }

  // initial component hook
  ngOnInit(): void {
    // assigns the component's session to the session value comming from subscription
    // catches the error and logs out the user
    this.sessionSubscription = this.userAuthService.session.subscribe( (session: Session) => {
      this.session = session
    }, (error: any) => this.userAuthService.logout() )

    this.userAuthService.onSessionChanges()
    
    // assigns the component's session to the session value comming from subscription
    // catches the error and takes the user to its homepage
    this.matchStatusSubscription = this.liveMatchService.statusSubject.subscribe( (matchStatus: {live: boolean, matchStatus: string, _id: string}) => {
      this.matchStatus = matchStatus
    }, (error: any) => this.userAuthService.navigateLoggedInUser() )
  }
  

  logout(){
    // logs out the user
    this.userAuthService.logout()
  }
  
  // unsubscribes to avoid data leaking
  ngOnDestroy(): void {
    this.sessionSubscription.unsubscribe()
    this.matchStatusSubscription.unsubscribe()
  }

}
