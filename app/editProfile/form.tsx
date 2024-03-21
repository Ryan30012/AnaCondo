"use client";
import { SaveButton } from '@/components/SaveButton/saveButton';
import { FormEvent } from 'react'
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
let errorMessage = "";

export default function Form(props: any) {
    const router = useRouter();
    // console.log(props);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })

    // redirect upon successful registration key submission
    if(response.status == 200) {
      errorMessage = "";
      router.push('/UserProfile');
    }
    // Show error message for invalid registration key (empty or not existent)
    else if (response.status == 500 || response.status == 501) {
      errorMessage = "Please enter a valid registration key";
      router.refresh();
    }
    // Handle response if necessary
    //const data = await response.json()
    // ...
  }
 
  return (
    <form onSubmit={onSubmit} action={"/UserProfile"}>
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
      <div className='text-red-600'>{errorMessage}</div>
    </div>
    <SaveButton />
    </form>
  )
}