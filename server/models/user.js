const mongoose = require("mongoose"); // load mongoose module
const validator = require("validator"); // load validator module
const jwt = require("jsonwebtoken"); // load jwt module
const bcrypt = require("bcryptjs"); // load bcryptjs module

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        min: 2,
        max: 30,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        min: 2,
        max: 30,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) { // validates if string is email or not
            if(validator.isEmail(value)) return true 
            else throw new Error("The value is not a email")
        }
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 15,
        trim: true
    },
    typeSubscription: {
        type: String,
        required: true,
        enum: [ "partial", "platinum" ], // string validation
        default: "partial"
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    gender: {
        type: String,
        required: true,
        enum: [ "male", "female" ] // string validation
    },
    mobilePhone: {
        type: String,
        trim: true,
        required: true,
        validate(value) { // validates if string is mobile from many countries
            if(validator.isMobilePhone(value, ['en-GB', 'en-US', 'pt-BR', 'pt-PT', 'pl-PL', 'it-IT', 'es-ES', 'en-AU' ])) return true
            else throw new Error("The mobile phone num is not from United Kigdom or United States")
        }
    },
    address: {
        type: String,
        trim: true,
        min: 5,
        max: 30,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

userSchema.statics.findByCredentials = async function(email, password) {
    const user = await User.findOne({ email }) // get user with specific password

    if(!user) throw new Error("Unable to find User") // if no user, throw error

    const isMatch = await bcrypt.compare(password, user.password) // check if encrypted password matches

    if(!isMatch) throw new Error("Password is wrong") // if password does not match, throw error

    return user;
}

userSchema.methods.generateAuthToken = async function () {
    const user = this; // assign user to this

    const token = await jwt.sign( { _id: user._id.toString() }, process.env.JWT_SECRET ) // generate jwtToken with objectID and jwt secret environment variable

    user.tokens = user.tokens.concat({ token }) // add token to tokens array

    await user.save() // save user

    return token;
}

userSchema.methods.toJSON = function() { // function when object is sent using JSON
    const user = this; // assign user to this
    const userObj = user.toObject() // return object without methods

    delete userObj.password; // delete password from object
    delete userObj.tokens; // delete tokens from object

    return userObj
}

userSchema.pre("save", async function(next) { // function when save is called
    const user = this; // assign user to this

    if(user.isModified("password")) { // if password was just changed
        user.password = await bcrypt.hash(user.password, 8) // encrypt new password
    }

    next() // call next function
})


const User = mongoose.model("User", userSchema); // create User model based on userSchema


module.exports = User;
