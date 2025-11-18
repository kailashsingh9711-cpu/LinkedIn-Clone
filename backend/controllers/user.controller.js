import gentoken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signUp = async(req,res)=>{
try {
    
    let {firstName,lastName,email,userName,password}=req.body;

      if(!firstName || !email || !password||!userName){
        return res.status(400).json({
            message:"something missing",
            success:false,
        })
    }


    let exist = await User.findOne({email})

  
    if(exist){
        return res.status(400).json({
            message:"email already exist",
            success:false,
        })
    }
    let existUserName = await User.findOne({userName})
    if(existUserName){
        return res.status(400).json({
            message:"user already exist",
            success:false,
        })
    }

    let hashedPassword = await bcrypt.hash(password,10);

    const user=await User.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        userName:userName,
        password:hashedPassword,
    })

    let token=await gentoken(user._id)

    res.cookie("token",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        sameSite:"strict",
        secure:process.env.NODE_ENV==="production",
    })


    res.status(201).json(user)
    


} catch (error) {
    console.error("SignUp error:", error);
    return res.status(500).json({
        message: error && error.message ? error.message : String(error),
    })
    
    
}
}

export const login = async(req,res)=>{
try {
    
    let {email,password}=req.body;

      if( !email || !password){
        return res.status(400).json({
            message:"something missing",
            success:false,
        })
    }


    let user = await User.findOne({email})

  
    if(!user){
        return res.status(400).json({
            message:"user not exist",
            success:false,
        })
    }


    let isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({
            message:"incorrect Password",
            success:false,
        })
    }

    let token=await gentoken(user._id)

    res.cookie("token",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        sameSite:"strict",
        secure:process.env.NODE_ENV==="production",
    })


    res.status(201).json(user);
    


} catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
        message: error && error.message ? error.message : String(error),
    })   
}
}

export const logOut = async(req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({
            message:"logout successfully",
            success:true,
        })
    } catch (error) {
        console.log(error);
        
    }
}