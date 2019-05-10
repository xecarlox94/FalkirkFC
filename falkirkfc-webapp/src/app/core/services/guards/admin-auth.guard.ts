import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../users/user-auth.service';

@Injectable({
    providedIn: "root"
})

export class AdminAuthGuard implements CanActivate {
    userAuthService: UserAuthService;

    constructor(userAuthSrv: UserAuthService){
        this.userAuthService = userAuthSrv;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.userAuthService.isAdmin();
    }

}