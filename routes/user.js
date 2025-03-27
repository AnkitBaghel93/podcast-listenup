const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

//SIGN-UP ROUTE

router.post("/signup", async(req, res) => {

  try {
    // inputs from the client
    const {email, username, password} = req.body;

    if(!email || !username || !password){
      return res.status(400).json({message:"All Fields Are Required"});
    }

    //check if the user already exist
    const existinguser = await User.findOne({email: email});
    if(existinguser){
      return res.status(400).json({message:"User Already Exist"});
    }

    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log('Generated Hash: ', hashedPassword);

    // save user to database
    const user = new User({
      email,
      password: hashedPassword, // ❗ Store the hashed password, not plain text
      username
    });
    await user.save().then(() => res.status(200).json({message:"SignUp Successfully "}));
    
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({message: "Server Error"});
  }
});

//SIGN-IN ROUTE

router.post("/signin", async(req, res) => {
  try {
    const {email} = req.body;

    const existinguser = await User.findOne({email: req.body.email});
    if(!existinguser)
    {
      res.status(404).json({message: "Signup First Please!"});
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, existinguser.password);
    console.log("Password Match:", isPasswordCorrect);
    if(!isPasswordCorrect)
    {
      return res.status(401).json({message:"Password is incorrect"});
    }

    //genertae JWT token
    const token = jwt.sign(
      {
        id:existinguser._id,
        email: existinguser.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d"
      }
    );
  
    res.cookie("podcasterUserToken", token, {
      httpOnly:true,
      maxAge: 30 * 24 * 60 * 60 * 1000 , 
      secure: process.env.NODE_ENV === "production",
      sameSite:"None"
    })

    return res.status(200).json({
      id :existinguser._id,
      username: existinguser.username,
      email: email,
      message:"Login Successfully"});
  } 
  catch (error) {
    console.error(error);
    return res.status(500).json({message: "Server Error. Please Try Again"});
  }
});

//LOGOUT ROUTE

router.post("/logout", async (req, res) => {
  res.clearCookie("podcasterUserToken",{
    httpOnly: true,
  } );
  res.status(200).json({message: "Logout Successfully!"});
});

//CHECK COOKIE PRESENT OR NOT
router.get("/check-cookie", async (req, res) => {
 const token = req.cookies.podcasterUserToken;
 if(token)
 {
  res.status(200).json({message: true});
 }
 res.status(200).json({message:false});
})

module.exports = router;