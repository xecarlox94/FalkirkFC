import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../users/user-auth.service';

// allows the service to be injected in components
@Injectable({
    // provides the service in the root module
    providedIn: "root"
})

export class AdminAuthGuard implements CanActivate {
    // stores the user authentication service
    userAuthService: UserAuthService

    // injects the dependency
    constructor(userAuthSrv: UserAuthService){
        this.userAuthService = userAuthSrv;
    }
    
    // returns a boolean on either the current user is an admin
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.userAuthService.isAdmin();
    }

}