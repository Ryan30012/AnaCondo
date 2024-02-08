//"use client";
import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';

let errors = {
  FormUname:'',
  FormEmail: '',
  FormPassword: '',
  FormConfirmPass:''
};
const SignUp = () => {
    async function signup(formData: FormData){
      'use server';
      //console.log(formData)
      const Fname = formData.get("Fname")?.toString();
      const Lname = formData.get("Lname")?.toString();
      const username = formData.get("username")?.toString();
      const DOB = formData.get("DOB")?.toString();
      const Address = formData.get("Address")?.toString();
      const Phone = formData.get("Phone")?.toString();
      const Email = formData.get("Email")?.toString();
      const Password = formData.get("Password")?.toString();
      
      const exists = (await sql`select username from users2 where username = ${username}`).rowCount > 0;
      //console.log(exists)
      if(!exists) {
      try {
        await sql`create table if not exists users2(uid serial primary key, Fname varchar(255), Lname varchar(255),username varchar(255), DOB DATE, Address varchar(255), Phone varchar(10), Email varchar(319), Password varchar(16), regKey varchar(255));`;
        const result = await sql`insert into users2(Fname, Lname, username, Dob, Address, Phone, Email, Password) values (${Fname},${Lname},${username}, ${DOB},${Address},${Phone},${Email},${Password})`;
      }
      catch(error) {
        console.log(error);
      }
    } else {
      console.log("redirecting...");
      redirect("/");
    }
   
    /*const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const formRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if passwords match
      if (password == confirmPassword) {
        // Passwords match, proceed with form submission
        console.log('Passwords match!');
        //formRef.current.submit();
        // Add your form submission logic here
      } else {
        // Passwords do not match, display an error message
        console.log('Passwords do not match!');
        setPasswordsMatch(false);
      }
    };

    const submitForm = () => {
      // Submit the form programmatically
      formRef.current.submit();
    };*/


  return (
  
<div className="bg-stone-50 flex flex-col items-center justify-center h-screen">
<script src="validation.js" async> </script>
  <form /*onSubmit={handleSubmit}*/ className="bg-stone 50 w-full max-w-md" action={signup} /*ref={formRef}*/>
    <div className="mb-4">
      <input
        name="Fname"
        type="text"
        placeholder="First Name"
        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        name="Lname"
        type="text"
        placeholder="Last Name"
        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className='mb-4'>
    <input
        required
        pattern="[a-z]{1,15}"
        title="Please enter a valid username (no symbols)"
        name="username"
        type="text"
        placeholder="Username"
        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        name="DOB"
        type="text"
        placeholder="Date of Birth"
        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        name="Address"
        type="text"
        placeholder="Address"
        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        name="Phone"
        type="text"
        placeholder="Phone"
        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <input
        required
        name="Email"
        type="email"
        placeholder="Email"
        pattern='/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/'
        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
      />

    </div>
    <div className="mb-4">
      <input
        required
        maxLength={255}
        name="Password"
        type="password"
        id="Password"
        placeholder="Password"
        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
        /*onChange={(e) => setPassword(e.target.value)}*/
      />
    </div>
    <div className="mb-6">
      <input
        required
        name="Confirmpass"
        type="password"
        id="Confirmpass"
        placeholder="Confirm Password"
        className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
        /*onChange={(e) => setConfirmPassword(e.target.value)}*/
      />
      {/*!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match!</p>*/}
    </div>
    <div className="mb-6">
      <button /*onSubmit={submitForm}*/ type="submit" className="w-full text-black bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
        Sign Up
      </button>
    </div>
    <div className="text-center text-gray-600">
      Already have an account?{' '}
      <span className="text-blue-500 cursor-pointer"><Link href="../SignIn"> Login </Link></span>
    </div>
  </form>
</div>
  )
}
}
export default SignUp;
