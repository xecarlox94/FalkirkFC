import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { shareReplay, tap } from 'rxjs/operators';


import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: "root"
})


export class UserAuthService {
    private http: HttpClient;
    private router: Router;

    constructor(http: HttpClient, router: Router){
        this.router = router;
        this.http = http;
    }

    isLoggedIn() {
        return !!this.getToken();
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
        localStorage.clear()
        this.router.navigate(["/", "login"])
    }







    

    setCoockies(next: any){
        console.log(next)
        const user = new User(next.user.email, next.user.password, next.user._id)
        user.setAdmin(next.user.admin)
        user.setSubscription(next.user.typeSubscription)
        this.setBearerToken(next.token)
        this.setAdmin(user)
        this.setSubscription(user)
    }
    
    setBearerToken(token: string){
        const bearerToken = "Bearer " + token;
        localStorage.setItem("auth-token", bearerToken)
        console.log(bearerToken)
    }

    setAdmin(user: User) {
        localStorage.setItem("admin", user.getAdmin())
    }

    setSubscription(user: User) {
        localStorage.setItem("subscription", user.getSubscription())
    }

    isAdmin(): boolean {
        return localStorage.getItem("admin") === "true"
    }
    
    getSubscription(): string {
        return localStorage.getItem("subscription");
    }

    getToken(): string {
        return localStorage.getItem("auth-token")
    }
    
}