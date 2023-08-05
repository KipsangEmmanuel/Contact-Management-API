const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
//@desc Register user
//@route POST /api/user/register
//@access public 
const registerUser = asyncHandler(async (req, res) => {
     const { username, email, password } = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const userAvailable = await User.findOne({ email });
    if(userAvailable) {
        res.status(400);
        throw new Error("User already exist")
    }

    //Hash password
    //bcrypt will provide us with promise
    const hashedPassword = await bcrypt.hash(password, 10);//10 is the salt rounds
    console.log("Hashed password: ", hashedPassword)
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    console.log(`User created: ${user}`);
    if(user) {
        res.status(201).json({
            _id: user.id,
            email: user.email
        });
    }else {
        res.status(400);
        throw new Error("User data is not valid")
    }
    res.json({
        message: "Register the User"
    });
});

//@desc Login user
//@route POST /api/user/login
//@access public 
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400);
        throw Error("All fields are required")
    }

    //find if the user is already there
    const user = await User.findOne({ email });
    //cpmpare password with hashedpassedword
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1min" }
        );
        res.status(200).json({accessToken})
    }else {
        res.status(401);
        throw new Error("Email or password is Invalid");
    }
});


//@desc Login user
//@route POST /api/user/login
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({
        message: "Current User Information"
    })
});


module.exports = { registerUser, loginUser, currentUser };