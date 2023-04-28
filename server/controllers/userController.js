const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require("../models/userModel")

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName || !email || !password){
        res.status(400)
        throw new Error("Please add all required fields")
    }

    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error("This User already exists, please login to your account")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password, salt)


    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id)
        })
    }

    else {
        res.status(400)
        throw new Error("Invalid User Data")
    }

    res.status(200);
    res.json({ message: "Registered a new user" })
});

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (!user){
        res.status(400)
        res.json({message: "This user does not exist, please register an account"})
    }

    if (user && (await bcrypt.compare(password, user.password))){
        res.status(200);
        res.json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id)
        })
    }

    else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }

    res.status(200);
    res.json({ message: "Logged in an existing user" })
});

const getCurrentUser = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({ message: "Got data of loggin in user" })
});

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser, loginUser, getCurrentUser
}