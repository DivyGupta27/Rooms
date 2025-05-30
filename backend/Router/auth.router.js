const express = require('express')
const router = express.Router()
const userAuth = require('../Models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = process.env.SECRET_KEY


router.post('/signup', async (req, res) => {
    const { email, number, password,name } = req.body;
    try {
        let user = await userAuth.findOne({ email: email })
        if (user) {
            res.status(400).send({
                success: false,
                message: "user already exists"
            })
        }
    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    console.log(hashPassword)

    const newUser = {
        name:name,
        email: email,
        number: number,
        password: hashPassword
    }
    user = await userAuth.create(newUser)
    res.send({
        success: true,
        message: "account created sucessfully",
        userData: user
    })}
    catch(error){
        res.send({
            success:false,
            message:"internal server error",
            error:error
        })
    }

})


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userAuth.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Email does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }
   
    const payload = { id: user._id };
    const token = jwt.sign(payload, secretKey, { expiresIn: '7d' });
    console.log(token)
    return res.send({
      success: true,
      message: "Login successful",
      userData: user,
      isAdmin:user.isAdmin,
      token,
    });

  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;



