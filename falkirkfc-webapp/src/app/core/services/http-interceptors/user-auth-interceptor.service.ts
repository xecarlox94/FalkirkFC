import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserAuthService } from '../users/user-auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';



// lets the service be injected in components
@Injectable()

export class UserAuthInterceptor implements HttpInterceptor {
    userAuthService: UserAuthService; // user authentication service
    router: Router; // angular router module

    // dependency injection
    constructor(userAuthSrv: UserAuthService, router: Router){
        this.userAuthService = userAuthSrv;
        this.router = router;
    }
    
    // intercepts every http request in the app
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // add the application/json accept header
        req = req.clone({ headers: req.headers.set("Accept", "application/json")})

        // add the application/json accept header
        if(!req.headers.has("Content-Type")){
            req = req.clone({ headers: req.headers.set("Content-Type", "application/json") })
        }
        
        // adds the bearer token
        if(this.userAuthService.isLoggedIn()){
            req = req.clone({ headers: req.headers.set("Authorization", this.userAuthService.getBearerToken())})
        }
        
        return next.handle(req).pipe(
            // catches all http requests errors
            catchError( (event: HttpErrorResponse) => {
                // if the server error is Unauthorized
                if(event.status === 401) {
                    // user is logged out
                    this.userAuthService.clearCoockiesToLogin()
                    return null;
                }
                // lets other http interceptors catch the error
                return throwError(event);
            })
        );
    }

}