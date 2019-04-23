

export class User {
    _id: string;
    email: string;
    password

    constructor(email: string, password: string){
        this.email = email;
        this.password = password;
    }
}