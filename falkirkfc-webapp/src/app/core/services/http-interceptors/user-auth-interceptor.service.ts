import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserAuthService } from '../users/user-auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';




@Injectable()

export class UserAuthInterceptor implements HttpInterceptor {
    userAuthService: UserAuthService;
    router: Router;

    constructor(userAuthSrv: UserAuthService, router: Router){
        this.userAuthService = userAuthSrv;
        this.router = router;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({ headers: req.headers.set("Accept", "application/json")})

        if(!req.headers.has("Content-Type")){
            req = req.clone({ headers: req.headers.set("Content-Type", "application/json") })
        }

        if(this.userAuthService.isLoggedIn()){
            req = req.clone({ headers: req.headers.set("Authorization", this.userAuthService.getBearerToken())})
        }
        

        return next.handle(req).pipe(
            catchError( (event: HttpErrorResponse) => {
                if(event.status === 401) {
                    this.userAuthService.clearCoockiesToLogin()
                    return null;
                } else {
                    //this.router.navigate([ "/login" ])
                }
                return throwError(event);
            })
        );
    }

}