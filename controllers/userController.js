//@desc Register a user
//@route GET /api/users/register
//@access public
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req,res) =>{
    res.json({messege: "Register the user"})
});

//@desc Login user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req,res) =>{
    res.json({messege: "Login user"})
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) =>{
    res.json({messege: "Current user info"})
});


module.exports = {registerUser,loginUser,currentUser};