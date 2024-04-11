"use client";
import { SaveButton } from '@/components/SaveButton/saveButton';
import { FormEvent } from 'react'
import { redirect } from "next/navigation";

export default function Form(props: any) {
    console.log(props);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
    // redirect upon successful registration key submission
    if(response.status == 200) redirect('/userProfile');
 
    // Handle response if necessary
    //const data = await response.json()
    // ...
  }
 
  return (
    <form onSubmit={onSubmit} action={"/UserProfile"} data-testid='userForm'>
    <div>
      <p>
        <b>Username</b>: 
        {/* <input
            name="Uname"
            type="text"
            placeholder={props.user.username}
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
        /> */}
        <span>{props.user.username}</span>
      </p>
    </div>
    <div>
      <p>
        <b>Contact e-mail</b>:
        {/* <input
            name="userEmail"
            type="text"
            placeholder={props.user.email}
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
        /> */}
        <span>{props.user.email}</span>
      </p>
    </div>
    <div>
      <p>
        <b>Phone Number</b>:
        {/* <input
            name="Uname"
            type="text"
            placeholder={props.user.phone}
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
        /> */}
        <span>{props.user.phone}</span>
      </p>
    </div>
    <div>
      <p>
        <b>Registration Key</b>:
        <input
            name="regKey"
            type="text"
            placeholder="Enter your registration key"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </p>
    </div>
    <SaveButton />
    </form>
  )
}