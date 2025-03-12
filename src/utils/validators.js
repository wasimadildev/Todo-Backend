const validator = require("validator");

const validateRegister = (req) => {
    const { firstName, lastName, username, emailId, password } = req.body;
    if(!firstName || !lastName || !username || !emailId || !password){
        throw new Error("Please fill all the fields")
    }else if (!validator.isEmail(emailId)) {
        throw new Error("Please enter a valid email");
    }else if (!validator.isLowercase(username)) {
        throw new Error("Username must be lowercase");
    }else if (!validator.isStrongPassword(password)) {
        throw new Error("Password must be strong");
    }

}


const validateLogin = (req) => {
    const { emailId, password } = req.body;
    if(!emailId || !password){
        throw new Error("Please fill all the fields")
    }else if (!validator.isEmail(emailId)) {
        throw new Error("Please enter a valid email");
    }
}

module.exports = { validateRegister, validateLogin }
