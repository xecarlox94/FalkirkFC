

export class User {
    email: string;
    password?: string;
    _id?: string;
    admin?: boolean;
    typeSubscription?: string;

    constructor(email: string, id: string = null){
        this.email = email;
        this._id = id;
    }

    setAdmin(value: boolean){
        this.admin = value;
    }

    setPassword(password: string){
        this.password = password;
    }
    
    setSubscription(value: string){
        this.typeSubscription = value;
    }

    getAdmin(): string {
        return String(this.admin);
    }

    getSubscription(){
        return this.typeSubscription;
    }
    
}