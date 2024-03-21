"use client"

import { SaveButton } from "@/components/SaveButton/saveButton";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";


let errorMessage = "";
export default function Form() {
    const router = useRouter();
    // console.log(props);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/newcoupon', {
      method: 'POST',
      body: formData,
    })

    // redirect upon successful registration key submission
    if(response.status == 200) {
      errorMessage = "";
      router.push('/CondoCompany/Coupons');
    }
    // Show error message for invalid discount value or property id
    else if (response.status == 500 || response.status == 501) {
      errorMessage = "Invalid discount value or property id";
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
        <b>Property ID</b>: 
         <input
            name="propertyid"
            type="number"
            placeholder="Enter the property id"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
        /> 
      </p>
    </div>
    <div>
      <p>
        <b>Discount</b>:
        <input
            name="discountvalue"
            type="number"
            placeholder= "Enter a percentage such as 0.25"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </p>
    </div>
    <div>
      <p>
        <b>Expiry Date</b>:
        <input
            name="expirydate"
            type="text"
            placeholder="YYYY-MM-DD"
            className="w-full text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
        /> 
      </p>
        {/* <div className='text-red-600'>{errorMessage}</div> */}
    </div>
    <SaveButton />
    </form>)
}