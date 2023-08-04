const asyncHandler = require('express-async-handler');

//@desc Register user
//@route POST /api/user/register
//@access public 
const registerUser = asyncHandler(async (req, res) => {
    res.json({
        message: "Register the User"
    });
});

//@desc Login user
//@route POST /api/user/login
//@access public 
const loginUser = asyncHandler(async (req, res) => {
    res.json({
        message: "Login the User"
    })
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