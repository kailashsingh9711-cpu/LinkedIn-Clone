import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthDataContext } from '../context/Authcontext'
import axios from "axios"

const SignUp = () => {

  let { serverUrl } = useContext(AuthDataContext)

  const [show,setShow] = useState(false);


  const [firstName,setFirstname]=useState("")
  const [lastName,setLastname]=useState("")
  const [userName,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)

  const [err,setErr] =useState("")


  const handleSignUp =async (e)=>{
   e.preventDefault()
   setLoading(true)
    try {
      let result = await axios.post(serverUrl+"/api/auth/signup", {
        firstName,
        lastName,
        userName,
        email,
        password
      }, { withCredentials: true })
      console.log(result);
      setLoading(false)
      setFirstname("")
      setLastname("")
      setUsername("")
      setEmail("")
      setPassword("")

    } catch (error) {
      setErr(error.response.data.message)
      setLoading(false)

    }
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
      <form className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white" onSubmit={handleSignUp}>
        <h1 className="text-gray-900 text-3xl mt-10 font-medium"></h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-round-icon lucide-user-round"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
          <input
            type="text"
            name="fisrtName"
            placeholder="firstname"
            className="border-none outline-none ring-0"
            required
            value={firstName}
            onChange={(e)=>setFirstname(e.target.value)}
          />
        </div>

        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-round-icon lucide-user-round"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
          <input
            type="text"
            name="fullName"
            placeholder="lastname"
            className="border-none outline-none ring-0"
            required
            value={lastName}
            onChange={(e)=>setLastname(e.target.value)}
          />
        </div>

        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-round-icon lucide-user-round"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
          <input
            type="text"
            name="fullName"
            placeholder="username"
            className="border-none outline-none ring-0"
            required
            value={userName}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>

        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail-icon lucide-mail"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden relative pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-lock-icon lucide-lock"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0 relative "
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <span className=' text-indigo-500 cursor-pointer absolute right-5' onClick={()=>setShow(prev=>!prev)}>{show? "hide  ":"show"}</span>
       
           </div>
        <div className="mt-4 text-left text-indigo-500">
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div>

        {err && <p>
          {err}</p>}
        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
        >
          {loading?"loading ...":"Sign Up "}
        </button>
        <p className="text-gray-500 text-sm mt-3 mb-11">
          {" "}
          Already have an account?
          <Link to="/login">
            <span className='text-indigo-500 hover:opacity-90'>click here</span>
          </Link>
        </p>
      </form>
    </div>
    </div>
  )
}

export default SignUp
