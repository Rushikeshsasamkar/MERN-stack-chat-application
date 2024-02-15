import User from "../models/userModel.js";

export const login = async(req,res)=>{
    try {
        const {fullname, username, password,confirmPassword} = req.body;
    
        if(password!== confirmPassword){
            return res.status(400).json({error:"Password did'nt match"})
        } 

        const user = await User.findOne(username)
        if(user){
            return res.status(400).json({error:"Password did'nt match"})
        }

    } catch (error) {
        
    }
}
export const logout = (req,res)=>{
    console.log("Logout User");
}
export const signup = (req,res)=>{
    res.send("Signup User")
    console.log("Signup User");
}