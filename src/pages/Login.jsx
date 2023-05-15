import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=" flex justify-center h-screen items-center">
      <div className="mx-auto flex items-center flex-col  p-10 border-white border w-fit rounded-lg backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-white mb-10">Login</h1>
        <form action="" className=" flex flex-col  gap-5 w-96">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className=" input"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="label">
              Password
            </label>
            <input type="password" placeholder="Password" className=" input" />
            <button className='ms-auto text-xs text-red-700 underline'>Forgot password!</button>
          </div>
         
          <div className="flex text-sm gap-2">
            <p>Don't have an account?</p>
            <Link to={"/register"}>
              <button className=" text-blue-500 underline">Register</button>
            </Link>
          </div>
          <button className="bg-blue-500 py-2 rounded-lg px-3 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
