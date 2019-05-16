

export class User {
    _id?: string;
    email?: string;
    password?: string;
    admin?: boolean;
    typeSubscription?: string;
    firstName?: string;
    lastName?: string;
    _adminSecret?: string;
    gender?: string;
    mobilePhone?: string;
    address?: string;

    constructor(id: string = null){
        this._id = id;
    }

    setFirstname(fName: string){
        this.firstName = fName
    }

    setLastName(lName: string){
        this.lastName = lName;
    }

    setGender(gender: string) {
        this.gender = gender;
    }

    setMobilePhone(mPhone: string){
        this.mobilePhone = mPhone;
    }
    
    setAddress(address: string){
        this.address = address;
    }

    setAdmin(value: boolean){
        this.admin = value;
    }

    setPassword(password: string){
        this.password = password;
    }

    setEmail(email: string){
        this.email = email;
    }

    setSecret(secret: string) {
        this._adminSecret = secret;
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

    setContactInfo(fName: string, lName: string, gender: string, mPhone: string, address: string){
        this.setFirstname(fName)
        this.setLastName(lName)
        this.setGender(gender)
        this.setMobilePhone(mPhone)
        this.setAddress(address)
    }

    setAccountInfo(admin: boolean, email: string, subscription: string){
        this.setAdmin(admin)
        this.setEmail(email)
        this.setSubscription(subscription)
    }
    
}