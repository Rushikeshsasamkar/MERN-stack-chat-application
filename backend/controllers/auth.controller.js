import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'




export const signup = async(req,res)=>{
    try {
        const {fullname, username, password,confirmPassword,gender} = req.body;
    
        if(password!== confirmPassword){
            return res.status(400).json({error:"Password did'nt match"})
        } 

        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error:"User already exists"})
        }

          // HASH Password Here
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password,salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic: girlProfilePic
        })

       

        if(newUser){
            // Generate JWT Token
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }else{
            res.status(500).json({error:"Invaid user data!"});
        }

      
    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}
export const login = (req,res)=>{
    res.send("Signup User")
    console.log("Signup User");
}
export const logout = (req,res)=>{
    console.log("Logout User");
}