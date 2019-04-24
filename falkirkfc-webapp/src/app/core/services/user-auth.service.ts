import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';



@Injectable({
    providedIn: "root"
})


export class UserAuthService {
    private http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }
    
    register(user: User){
        return this.http.post<any>(`${ environment.baseURL }/users/`, user)
    }

    login(user: User){
        return this.http.post<any>(`${ environment.baseURL }/users/login`, user)
    }

    isLoggedIn() {
        return !!localStorage.getItem("token")
    }

    getToken(){
        return localStorage.getItem("token")
    }
}