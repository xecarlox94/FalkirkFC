import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserAuthService } from '../users/user-auth.service';
import { catchError } from 'rxjs/operators';




@Injectable()

export class UserAuthInterceptor implements HttpInterceptor {
    userAuthService: UserAuthService;
    constructor(userAuthSrv: UserAuthService){
        this.userAuthService = userAuthSrv;
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
                return throwError(event);
            })
        );
    }

}