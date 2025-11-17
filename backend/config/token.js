import jwt from "jsonwebtoken";
const gentoken = async (userId)=>{
     try {
        let token = await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})

        return token;
     } catch (error) {
        console.log(error);
        
     }
}



export default gentoken;

//  {
//   "firstName": "kailash",
//   "lastName": "singh",
//   "email": "anjnag@gmail.com",
//   "userName": "kailash1", 
//   "password": "123"
// }