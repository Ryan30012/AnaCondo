"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export function SaveButton() {
  // async function handleSubmit (e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   console.log("Triggered handleSubmit...");
  //   const formData = new FormData(e.currentTarget);
  //   console.log(formData.get("Uname"));
  //   console.log(formData.get("regKey"));
  //   console.log(formData.get("PhoneNum"));
  //   return;
  // };
  return (
    <>
      <div className="mt-4">
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          type="submit"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Save
          </span>
        </button>
      </div>
    </>
  );
}
