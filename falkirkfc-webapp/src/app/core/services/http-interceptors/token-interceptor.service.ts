import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from '../user-auth.service';



@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    injector: Injector;

    constructor(injector: Injector){
        this.injector = injector
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let userAuthService = this.injector.get(UserAuthService)

        let tokenizedReq = req.clone({
            setHeaders:{
                Authorization: `Bearer ${ userAuthService.getToken() }`
            }
        })
        return next.handle(tokenizedReq)
    }

}