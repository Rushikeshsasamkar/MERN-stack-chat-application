import User from "../models/userModel.js";

export const signup = async(req,res)=>{
    try {
        const {fullname, username, password,confirmPassword,gender} = req.body;
    
        if(password!== confirmPassword){
            return res.status(400).json({error:"Password did'nt match"})
        } 

        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error:"Password did'nt match"})
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password,
            gender,
            profilePic: gender === 'male' ? boyProfilePic: girlProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic
        })

        // HASH Passoword Here
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