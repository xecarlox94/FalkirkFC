import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: "root"
})


export class UsersService {
    http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }

    getUsers(){
        return this.http.get<User[]>(`${ environment.baseURL }/users`).pipe(
            map( (value: any) => {
                const fetchedUsers = value.users;
                const users: User[]= [];
                for (let i = 0; i < fetchedUsers.length; i++) {
                    users[i] = new User(fetchedUsers[i]._id)
                    users[i].setContactInfo(fetchedUsers[i].firstName, fetchedUsers[i].lastName, fetchedUsers[i].gender, fetchedUsers[i].mobilePhone, fetchedUsers[i].address)
                    users[i].setAccountInfo(fetchedUsers[i].admin, fetchedUsers[i].email, fetchedUsers[i].typeSubscription)
                }
                return users
            })
        ).toPromise()
    }

    getUser(id: string){
        return this.http.get<User>(`${ environment.baseURL }/users/${ id }`).pipe(
            map( (value: any) => {
                const user = new User(value.user._id)
                user.setContactInfo(value.user.firstName, value.user.lastName, value.user.gender, value.user.mobilePhone, value.user.address)
                user.setAccountInfo(value.user.admin, value.user.email, value.user.typeSubscription)
                return user
            })
        ).toPromise()
    }

    updateUser(user: User){
        return this.http.patch<User>(`${ environment.baseURL }/users/${ user._id }`, user).pipe(
            map( (value: any) => {
                const user = new User(value.user._id)
                user.setContactInfo(value.user.firstName, value.user.lastName, value.user.gender, value.user.mobilePhone, value.user.address)
                user.setAccountInfo(value.user.admin, value.user.email, value.user.typeSubscription)
                return user
            })
        ).toPromise()
    }

    deleteUser(user: User){
        return this.http.delete<User>(`${ environment.baseURL }/users/${ user._id }`).pipe(
            map( (value: any) => {
                const user = new User(value.user._id)
                user.setContactInfo(value.user.firstName, value.user.lastName, value.user.gender, value.user.mobilePhone, value.user.address)
                user.setAccountInfo(value.user.admin, value.user.email, value.user.typeSubscription)
                return user
            })
        ).toPromise()
    }

}