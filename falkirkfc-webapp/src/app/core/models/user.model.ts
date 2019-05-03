

export class User {
    email: string;
    password: string;
    _id?: string;

    constructor(email: string, password: string, id: string = null){
        this.email = email;
        this.password = password;
        this._id = id;
    }
}