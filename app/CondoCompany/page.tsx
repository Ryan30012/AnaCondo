import Link from "next/link";
import React from "react";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const Homepage = () => {
  const breadcrumbItems = [{ text: "Condo Company", url: "/CondoCompany" }];
  return (
    <div className="">
      <div>
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <main className="h-screen flex flex-col items-center justify-center">
        <>
          <div className="">
            <h1 className="font-bold text-xl m-6 text-center">
              Welcome to your Condo Management page!
            </h1>
          </div>
          <div className="grid grid-rows-4 gap-3 w-full max-w-4xl items-center justify-center content-center">
            <div className="mt-4 ">
              <button
                className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                type="submit"
              >
                <Link
                  href="CondoCompany/Properties"
                  className="w-60 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Property information
                </Link>
              </button>
            </div>

            <div className="mt-4">
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                type="submit"
              >
                <span className="w-60 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Upload File
                </span>
              </button>
            </div>

            <div className="mt-4">
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                type="submit"
              >
                <span className="w-60 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Send Registration Key
                </span>
              </button>
            </div>

            <div className="mt-4">
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                type="submit"
              >
                <Link
                  href="CondoCompany/Coupons"
                  className="w-60 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Create Condo Discounts
                </Link>
              </button>
            </div>
          </div>
        </>
      </main>

      <footer className="p-4">
        <button className="w-full py-2 bg-black text-white rounded hover:bg-opacity-75">
          Sign Out
        </button>
      </footer>
    </div>
  );
};

export default Homepage;
