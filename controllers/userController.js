const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc Register a user
//@route GET /api/users/register
//@access public
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req,res) =>{
    const {username,email,password} = req.body;
    if (!username || !email || !password){
        res.status(400);
        throw new Error("All fileds must be filled!")
    }
    const userAvailable = await User.findOne({email});
    if (userAvailable){
        res.status(400);
        throw new Error ("USer already registered");
    }

    //Hashing password
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("Hashed password",hashedPassword);
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    });
    console.log(`user created ${user}`);
    if(user){
        res.status(201).json({_id:user.id,email:user.email});

    } else {
        throw new Error("User data is not valid");
    }

    res.json({messege: "Register the user"})
});

//@desc Login user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error("All fileds must be filled!")
    }
    const user = await User.findOne({email});
    if (user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },
        },process.env.ACCESS_TOKEN_SECERT,
        {expiresIn:"15m"}
        );
        res.status(200).json({accessToken});
    } else {
        res.status(401)
        throw new Error("Email or password is not valid")
    }
    //compare passwod with hashed password
   
}

);

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) =>{
    res.json({messege: "Current user info"})
});


module.exports = {registerUser,loginUser,currentUser};