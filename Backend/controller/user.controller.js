
import User from "../model/user.model.js";

export const signup = async (req,res)=> {
    try {
        const {fullname, email,password} = req.body;
        const user =await User.findOne({email});
        if(user){
            return res.status(400).json({messge: 'user already exits'});
        }
        const createUser = new User({
            fullname,
            email,
            password
        });
        await createUser.save();
        res.status(201).json({message: "User has been created", user: {fullname: createUser.fullname, email: createUser.email, id: createUser._id}});
        res.redirect('/');

    } catch (error) {
        console.log("failed to signup :", error);
        return res.status(500).json({message: error});
    }
}

export const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "user not found"});
        }   
        if(user.password !== password){
            return res.status(400).json({message: "invalid password"});
        }   
        res.status(200).json({message: "login successful", user: {fullname: user.fullname, email: user.email, id: user._id}});
    } catch (error) {
        console.log("failed to login :", error);
        return res.status(500).json({message: error});
    }
}  