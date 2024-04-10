import React, { useState } from "react";

export default function calculateCondoFees() {
  return (
    <div
      id="calculator"
      className="flex-col border-t-4 border-lime-700 sm:flex sm:flex-col md:my-8 my-4"
    >
      <div className="flex md:flex-row flex-col focus:w-full border-b border-r border-l shadow rounded-b">
        {/* Inputs Section */}
        <div className="md:border-b w-full">
          <div className="py-2 bg-lime-100 text-secondary">
            <div className="w-full flex leading-6 font-sans font-semibold justify-center items-center text-xl">
              Enter the Cost per Square Foot of your Condo and Parking!
            </div>
          </div>
          <div className="flex flex-row items-center lg:px-4 px-2 pt-4 pb-1 hover:bg-gray-100 duration-200">
            <div className="w-full">
              <label className="flex flex-row items-center leading-5 font-medium sm:text-xl text-lime-800">
                Condo
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 flex items-center pointer-events-none text-gray-500 right-0 pr-3">
                  <span className="sm:text-md sm:leading-5 ml-4">$/sq ft</span>
                </div>
                <input
                  type="text"
                  className="appearance-none bg-white border-2 rounded-[0.375rem] block py-[7px] px-4 w-full sm:text-md sm:leading-5 text-gray-800 false border-gray-350 h-12"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center lg:px-4 px-2 pb-1 hover:bg-gray-100 duration-200 pt-2">
            <div className="flex flex-col text-blue-800 w-full">
              <div>
                <label
                  className="block sm:text-xl leading-5 font-medium text-lime-800"
                  htmlFor="parking"
                >
                  Parking
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 flex items-center pointer-events-none text-gray-500 right-0 pr-3">
                    <span className="sm:text-md sm:leading-5 ml-4">
                      $/sq ft
                    </span>
                  </div>
                  <input
                    type="text"
                    className="appearance-none bg-white border-2 rounded-[0.375rem] block py-[7px] px-4 w-full sm:text-md sm:leading-5 text-gray-800 false border-gray-350 h-12"
                  />
                </div>
                <div className="calculateFee-submit-button mt-4">
                  <button
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                    type="submit"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Calculate
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
