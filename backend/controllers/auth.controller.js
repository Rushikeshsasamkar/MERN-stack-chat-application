export const login = async(req,res)=>{
    try {
        const {fullname, username, password,confirmPassword} = req.body;
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