const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
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
        enum: [ "partial", "platinum" ],
        default: "partial"
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
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
    const user = await User.findOne({ email })

    if(!user) throw new Error("Unable to find User")

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) throw new Error("Password is wrong")

    return user;
}

userSchema.methods.generateAuthToken = async function () {
    const user = this;

    const token = await jwt.sign( { _id: user._id.toString() }, process.env.JWT_SECRET )

    user.tokens = user.tokens.concat({ token })

    await user.save()

    return token;
}

userSchema.methods.toJSON = function() {
    const user = this;
    const userObj = user.toObject()

    delete userObj.password
    delete userObj.tokens

    return userObj
}

userSchema.pre("save", async function(next) {
    const user = this;

    if(user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


userSchema.plugin(uniqueValidator);
const User = mongoose.model("User", userSchema);


module.exports = User;