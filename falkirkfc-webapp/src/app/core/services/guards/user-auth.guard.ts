import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../users/user-auth.service';


// allows the service to be injected in components
@Injectable({
    // provides the service in the root module
    providedIn: "root"
})

export class UserAuthGuard implements CanActivate {
    // stores the user authentication service
    userAuthService: UserAuthService

    // injects the dependency
    constructor(userAuthSrv: UserAuthService){
        this.userAuthService = userAuthSrv;
    }
    
    // returns a boolean on either the current user is logged in
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.userAuthService.isLoggedIn();
    }

    


}