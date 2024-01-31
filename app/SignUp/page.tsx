import React from 'react'
import Link from 'next/link'

const SignUp = () => {
  return (
<div className="flex flex-col items-center justify-center h-screen">
  <div className="w-full max-w-md">
    <div className="mb-4">
      <input
        type="text"
        placeholder="First Name"
        className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Last Name"
        className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Date of Birth"
        className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Address"
        className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Phone"
        className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        type="email"
        placeholder="Email"
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
    <div className="mb-6">
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-6">
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
        Sign Up
      </button>
    </div>
    <div className="text-center text-gray-600">
      Already have an account?{' '}
      <span className="text-blue-500 cursor-pointer"><Link href="../SignIn"> Login </Link></span>
    </div>
  </div>
</div>

  )
}

export default SignUp