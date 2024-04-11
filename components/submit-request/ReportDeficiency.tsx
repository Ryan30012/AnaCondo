"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ReportDeficiency() {
  let errorMessage = "";
  const router = useRouter();
  // console.log(props);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submitrequest/deficiency", {
      method: "POST",
      body: formData,
    });

    // redirect upon successful registration key submission
    if (response.status == 200) {
      errorMessage = "";
      router.push("/SubmitRequest");
    }
    // Show error message for invalid discount value or property id
    else if (response.status == 500 || response.status == 501) {
      errorMessage = "Invalid request details or user email";
      router.refresh();
    }
    // Handle response if necessary
    //const data = await response.json();
    // ...
  }
  return (
    <form onSubmit={onSubmit} action={"/UserProfile"}>
      <div data-testid="report-deficiency" className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@email.com"
          required
        />
      </div>
      <div className="max-w-sm mb-4">
        <label
          htmlFor="common-room"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a common room
        </label>
        <select
          name="common-room"
          id="common-room"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
        >
          <option selected>Choose a common room</option>
          <option value="spa">Spa</option>
          <option value="gym">Gym</option>
          <option value="mailroom">Mailroom</option>
          <option value="pool">Pool</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="common-rooms"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          The reported deficiency
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write the deficiency in the common room you wish to report..."
        ></textarea>
        <div className="common-room-submit-button mt-4">
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            type="submit"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
