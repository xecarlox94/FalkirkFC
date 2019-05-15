import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { shareReplay, tap, map } from 'rxjs/operators';

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
        ).toPromise()
    }

    login(user: User){
        return this.http.post<User>(`${ environment.baseURL }/users/login`, user).pipe(
            tap( (next: any) => this.setCoockies(next) ),
            shareReplay()
        ).toPromise()
    }

    logout(){
        return this.http.delete<any>(`${ environment.baseURL }/users/logout`).toPromise()
                    .then( () => {
                        this.clearCoockiesToLogin()
                    })
                    .catch( (err) => console.log(err) )
    }

    logoutAll(){
        return this.http.delete<any>(`${ environment.baseURL }/users/logoutAll`).toPromise()
                    .then( () => {
                        this.clearCoockiesToLogin()
                    })
                    .catch( (err) => console.log(err) )
    }


    getCurrentUser(): Promise<User> {
        return this.http.get<User>(`${ environment.baseURL }/users/me`).pipe(
            map( (value: any) => {
                const user = new User()
                user.setAdmin(value.user.admin)
                user.setSubscription(value.user.typeSubscription)
                user.setEmail(value.user.email)
                user.setContactInfo(value.user.firstName, value.user.lastName, value.user.gender, value.user.mobilePhone, value.user.address)
                return user;
            })
        ).toPromise()
    }

    updateCurrentUser(user: User){
        return this.http.patch<User>(`${ environment.baseURL }/users/`, user).pipe(
            map( (value: any) => {
                const user = new User()
                user.setEmail(value.user.email)
                user.setAdmin(value.user.admin)
                user.setSubscription(value.user.typeSubscription)
                user.setContactInfo(value.user.firstName, value.user.lastName, value.user.gender, value.user.mobilePhone, value.user.address)
                return user;
            })
        ).toPromise()
    }

    setCoockies(next: any){
        const user = new User(next.user._id)
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
        this.onSessionChanges()
    }

    navigateLoggedInUser(){
        if(this.isLoggedIn()){
            if(this.isAdmin()) this.router.navigate([ "/adminDashboard" ]) , err => console.log("ERROR:", err)
            else this.router.navigate([ "/dashboard" ]) , err => console.log("ERROR:", err)
        }
    }
    
}