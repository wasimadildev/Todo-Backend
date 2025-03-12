const User = require("../models/user.js")
const {validateRegister, validateLogin} = require("../utils/validators.js")
const validateLogin = require("../utils/validators.js")
const bcrypt = require("bcrypt")
const registerUser = async(req , res , next) =>{
    try {
       
  
        validateRegister(req);
      
        const { firstName, lastName, username, password, emailId } = req.body;
        

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName,
            lastName,
            username,
            emailId,
            password: passwordHash,
        });
        await user.save();
    
        

        res.send("User Created Successfully")

    } catch (error) {
     
        res.status(500).json({error: "User Creation Failed" , message : error.message})
    }

}


const loginUser = async (req, res, next) =>{
    try {
        // Validate data that Get 
        validateLogin(req);
        // Check Email already Exist 
        const {emailId , password} = req.body;
        const user = await User.findOne({emailId});
        if(!user){
            return res.status(404).json({error: "User Not Found"})
        }
        // compare password
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(401).json({error: "Invalid Password"})
        }

        // Genrate JWT Token

        const token = await isJWT.sign({_id: user._id} , process.env.JWT_SECRET, process.env.JWT_EXPIRY); 

        // send token in cookies 
        res.cookie("token" , token)
        // send res message and token
        res.send("Login Successfully")
        
    } catch (error) {

        res.status(500).json({error: "Login Failed" , message : error.message})
        
    }
}

exports.module = {registerUser , loginUser}