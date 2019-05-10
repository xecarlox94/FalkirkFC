import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Session } from '../../models/session.model';
import { User } from '../../models/user.model';

@Injectable({
    providedIn: "root"
})

export class UserAuthService {
    private http: HttpClient;
    private router: Router;
    session: Subject<Session> = new Subject<Session>();

    constructor(http: HttpClient, router: Router){
        this.router = router;
        this.http = http;
    }
    
    register(user: User){
        return this.http.post<User>(`${ environment.baseURL }/users/`, user).pipe(
            tap( (next: any) => this.setCoockies(next) ),
            shareReplay()
        )
    }

    login(user: User){
        return this.http.post<User>(`${ environment.baseURL }/users/login`, user).pipe(
            tap( (next: any) => this.setCoockies(next) ),
            shareReplay()
        )
    }

    logout(){
        return this.http.delete<any>(`${ environment.baseURL }/users/logoutAll`).toPromise()
                    .then( () => {
                        this.clearCoockiesToLogin()
                        this.onSessionChanges()
                    })
    }


    getCurrentUser() {
        return this.http.get<User>(`${ environment.baseURL }/users/me`).toPromise()
                        .then( (value: any) => console.log(value))
    }

    setCoockies(next: any){
        const user = new User(next.user.email, next.user.password, next.user._id)
        user.setAdmin(next.user.admin)
        user.setSubscription(next.user.typeSubscription)
        this.setBearerToken(next.token)
        this.setAdmin(user)
        this.setSubscription(user)
        this.onSessionChanges()
    }
    
    setBearerToken(token: string){
        const bearerToken = "Bearer " + token;
        localStorage.setItem("auth-token", bearerToken)
    }

    setAdmin(user: User) {
        localStorage.setItem("admin", user.getAdmin())
    }

    setSubscription(user: User) {
        localStorage.setItem("subscription", user.getSubscription())
    }

    isLoggedIn() {
        return !!this.getBearerToken();
    }

    isAdmin(): boolean {
        return localStorage.getItem("admin") === "true"
    }
    
    getSubscription(): string {
        return localStorage.getItem("subscription");
    }

    getBearerToken(): string {
        return localStorage.getItem("auth-token")
    }

    onSessionChanges(){
        this.session.next(this.getSession())
    }

    getSession(){
        return new Session( this.isLoggedIn(), this.isAdmin(), this.getSubscription())   
    }
    
    clearCoockiesToLogin(){
        localStorage.clear()
        this.router.navigate(["/", "login"])
    }
}