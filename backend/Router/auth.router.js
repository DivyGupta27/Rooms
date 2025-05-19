const express = require('express')
const router = express.Router()
const userAuth = require('../Models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = process.env.SECRET_KEY

router.post('/signup', async (req, res) => {
    const { email, number, password } = req.body;
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
    let user = await userAuth.findOne({ email: email });
    console.log(user);
    if (!user) {
      res.status(400).send({
        success: false,
        message: "email does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      res.status(400).send({
        success: false,
        message: "invalid email or password",
      });
    }

    const data = {
      id: user._id,
    };

    const token = jwt.sign(data, secretKey);

    console.log(token);

    res.send({
      success: true,
      message: "login successfully",
      userData: user,
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "internal server error",
    });
  }
});

module.exports = router;



