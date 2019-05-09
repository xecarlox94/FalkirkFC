


export class Session {
    loggedIn: boolean;
    admin: boolean;
    subscription: string;

    constructor( loggedIn: boolean, admin: boolean, subscription: string){
        this.loggedIn = loggedIn;
        this.admin = admin;
        this.subscription = subscription;
    }
}