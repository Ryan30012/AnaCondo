import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
  <div className="w-full max-w-xs">
    <div className="mb-4">
      <input
        type="text"
        placeholder="Username"
        className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        placeholder="Password"
        className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="flex items-center mb-4">
      <input type="checkbox" id="remember" className="mr-2" />
      <label htmlFor="remember" className="text-gray-600">
        Remember me
      </label>
    </div>
    <div className="mb-6">
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
        Login
      </button>
    </div>
    <div className="text-center text-gray-600">
      Don't have an account?{' '}
      <span className="text-blue-500 cursor-pointer"><Link href='../SignUp'>Sign Up</Link></span>
    </div>
  </div>
</div>

  )
}

export default SignIn