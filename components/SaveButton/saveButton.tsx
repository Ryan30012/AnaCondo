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
    <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
        Save
        </button>
  );
}