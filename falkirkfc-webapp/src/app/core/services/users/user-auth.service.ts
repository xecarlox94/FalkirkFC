import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { shareReplay, tap, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Session } from '../../models/session.model';
import { User } from '../../models/user.model';


// allows the service to be injected in components
@Injectable({
    // provides the service in the root module
    providedIn: "root"
})

export class UserAuthService {
    private http: HttpClient; // angular module to do http data requests
    private router: Router; // angular module to navigate through angular components

    // initializes a Rxjs subsject which emits events and return observables that subscribe to them
    session: Subject<Session> = new Subject<Session>();

    // injects dependencies
    constructor(http: HttpClient, router: Router){
        this.router = router;
        this.http = http;
    }
    
    // registers user
    register(user: User): Promise<any> {
        return this.http.post<User>(`${ environment.baseURL }/users/`, user).pipe(
            // sets local storage coockies
            tap( (next: any) => this.setCoockies(next) ),
            // avoids requests duplication
            shareReplay()
        ).toPromise() // returns a promise
    }
    
    // logins in the user
    login(user: User): Promise<any> {
        return this.http.post<User>(`${ environment.baseURL }/users/login`, user).pipe(
            tap( (next: any) => this.setCoockies(next) ),
            shareReplay()
        ).toPromise() // returns a promise
    }
    
    // logs out the user
    logout(){
        return this.http.delete<any>(`${ environment.baseURL }/users/logout`).toPromise()
                    .then( () => {
                        // clear coockies and navigates to homepage
                        this.clearCoockiesToLogin()
                    })
                    // catches the promise error
                    .catch( (err) => console.error(err) )
    }
    
    // logs out the user, deletes all tokens
    logoutAll(){
        return this.http.delete<any>(`${ environment.baseURL }/users/logoutAll`).toPromise()
                    .then( () => {
                        this.clearCoockiesToLogin()
                    })
                    // catches the promise error
                    .catch( (err) => console.error(err) )
    }
    
    // gets current user
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
        ).toPromise() // returns a promise
    }
    
    // updates current user
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
        ).toPromise() // returns a promise
    }

    // sets coockies and local variables
    setCoockies(next: any){
        const user = new User(next.user._id)
        user.setAdmin(next.user.admin)
        user.setSubscription(next.user.typeSubscription)
        this.setBearerToken(next.token)
        this.setAdmin(user)
        this.setSubscription(user)
        this.onSessionChanges() // updates session on app
    }
    
    // sets local auth token
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
    
    // updates the session throughout the application
    onSessionChanges(){
        this.session.next(this.getSession())
    }

    getSession(){
        return new Session( this.isLoggedIn(), this.isAdmin(), this.getSubscription())   
    }
    
    // clears local storage and navigates to login
    clearCoockiesToLogin(){
        localStorage.clear()
        this.router.navigate(["/", "auth", "login"])
        this.onSessionChanges()
    }
    
    // navigates user to its dashboard
    navigateLoggedInUser(){
        if(this.isLoggedIn()){
            if(this.isAdmin()) this.router.navigate([ "/adminDashboard" ]) , err => console.log("ERROR:", err)
            else this.router.navigate([ "/dashboard" ]) , err => console.log("ERROR:", err)
        }
    }
    
}