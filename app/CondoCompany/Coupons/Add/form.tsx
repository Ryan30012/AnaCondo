"use client";

import { SaveButton } from "@/components/SaveButton/saveButton";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

let errorMessage = "";
export default function Form() {
  /*BREADCRUMB ITEMS*/
  const breadcrumbItems = [
    { text: "Condo Company", url: "/CondoCompany" },
    { text: "Create Condo Discounts", url: "/CondoCompany/Coupons" },
    { text: "Add New Discount", url: "/CondoCompany/Coupons/Add" },
  ];

  const router = useRouter();
  // console.log(props);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/newcoupon", {
      method: "POST",
      body: formData,
    });

    // redirect upon successful registration key submission
    if (response.status == 200) {
      errorMessage = "";
      router.push("/CondoCompany/Coupons");
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
    <>
      <div>
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="flex justify-center items-center m-2">
        <form
          data-testid="form"
          className=" rounded-xl border-2 border-lim-200 p-6"
          onSubmit={onSubmit}
          action={"/UserProfile"}
        >
          <div className="mb-4">
            <h1 className="font-bold text-xl m-2 text-center">
              Create a <span className="underline">Condo Coupon</span>
            </h1>
            <h1>Complete the fields and click save to offer a new discount </h1>
          </div>

          <div className="my-2">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Property ID
            </label>
            <div data-testid="propertyid" className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4  text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M422.049,69.426c-91.066-91.918-239.404-92.609-331.322-1.542s-92.609,239.404-1.542,331.322  c0.71,0.716,1.424,1.428,2.143,2.135l83.98,77.548c44.886,43.938,116.602,44.127,161.719,0.426l85.023-78.57  C513.538,309.253,513.538,160.919,422.049,69.426L422.049,69.426z M384.181,288.332c0,29.407-23.839,53.246-53.246,53.246H181.846  c-29.407,0-53.246-23.839-53.246-53.246v-71.818c0-20.946,10.265-40.562,27.475-52.501l63.895-44.322  c21.918-15.146,50.922-15.146,72.841,0l63.895,44.322c17.21,11.939,27.475,31.555,27.475,52.501V288.332z M341.584,216.513v71.818  c0,5.881-4.768,10.649-10.649,10.649h-31.948v-42.597c0-11.763-9.536-21.298-21.298-21.298h-42.597  c-11.763,0-21.298,9.536-21.298,21.298v42.597h-31.948c-5.881,0-10.649-4.768-10.649-10.649v-71.818  c-0.002-6.984,3.42-13.526,9.158-17.507l63.895-44.322c7.312-5.028,16.968-5.028,24.28,0l63.895,44.322  C338.164,202.987,341.586,209.529,341.584,216.513z" />
                </svg>
              </span>
              <input
                type="number"
                name="propertyid"
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-lime-500 focus:border-lime-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                placeholder="Enter property ID"
              />
            </div>
          </div>

          <div data-testid="discount-percentage" className="my-2">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Discount Percentage
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4  text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24,12c0-1.696-.86-3.191-2.168-4.073,.301-1.548-.148-3.213-1.347-4.413-1.199-1.199-2.864-1.648-4.413-1.347-.882-1.308-2.377-2.168-4.073-2.168s-3.191,.86-4.073,2.168c-1.548-.301-3.214,.148-4.413,1.347-1.199,1.199-1.648,2.864-1.347,4.413-1.308,.882-2.168,2.377-2.168,4.073s.86,3.191,2.168,4.073c-.301,1.548,.148,3.214,1.347,4.413,1.199,1.199,2.864,1.648,4.413,1.347,.882,1.308,2.377,2.168,4.073,2.168s3.191-.86,4.073-2.168c1.548,.301,3.214-.148,4.413-1.347,1.199-1.199,1.648-2.864,1.347-4.413,1.308-.882,2.168-2.377,2.168-4.073Zm-16-3c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm2.766,7h-2.332l4.8-8h2.332l-4.8,8Zm4.234,0c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z" />
                </svg>
              </span>
              <input
                type="number"
                name="discountvalue"
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-lime-500 focus:border-lime-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                placeholder="Enter a percentage such as 0.25"
              />
            </div>
          </div>

          <div data-testid="expiry-date" className="my-2">
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Expiry Date
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4  text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm1,12.433L7.947,15.6,6.886,13.9,11,11.325V6h2Z" />
                </svg>
              </span>
              <input
                type="text"
                name="expirydate"
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-lime-500 focus:border-lime-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>

          {/* <div className='text-red-600'>{errorMessage}</div> */}

          <div className="flex items-center justify-center center-align">
            <SaveButton />
          </div>
        </form>
      </div>
    </>
  );
}
