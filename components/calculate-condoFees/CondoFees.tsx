import React, { useState } from "react";

function Calculator() {
  const [squareFootage, setSquareFootage] = useState(800);
  const [selectedCity, setSelectedCity] = useState("Toronto");

  // Function to calculate condo fees based on square footage and city
  const calculateCondoFees = () => {
    // Logic to calculate condo fees based on square footage and city
    // For demonstration purposes, assuming fixed values
    const monthlyFee = 472;
    const yearlyFee = monthlyFee * 12;
    return { monthlyFee, yearlyFee };
  };

  const { monthlyFee, yearlyFee } = calculateCondoFees();

  return (
    <div
      id="calculator"
      className="flex-col border-t-4 border-orange-500 sm:flex sm:flex-col md:my-8 my-4"
    >
      <div className="flex md:flex-row flex-col focus:w-full border-b border-r border-l shadow rounded-b">
        {/* Inputs Section */}
        <div className="md:w-2/5 md:border-r border-b">
          <div className="py-2 bg-orange-200 text-secondary">
            <div className="w-full flex leading-6 font-sans font-semibold justify-center items-center text-3xl">
              <div className="mr-2 relative">
                <img
                  alt=""
                  src="/static/icons/calculators/Inputs.svg"
                  decoding="async"
                  data-nimg="fixed"
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 40,
                    height: 40,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
              </div>
              Inputs
            </div>
          </div>
          <div className="flex flex-row items-center lg:px-4 px-2 pt-4 pb-1 hover:bg-gray-100 duration-200">
            <div className="w-full">
              <label className="flex flex-row items-center leading-5 font-medium sm:text-xl text-blue-800">
                Square Footage
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 flex items-center pointer-events-none text-gray-500 right-0 pr-3">
                  <span className="sm:text-md sm:leading-5 ml-4">/ft²</span>
                </div>
                <input
                  type="text"
                  className="appearance-none bg-white border-2 rounded-[0.375rem] block py-[7px] px-4 w-full sm:text-md sm:leading-5 text-gray-800 false border-gray-350"
                  inputmode="numeric"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center lg:px-4 px-2 pb-1 hover:bg-gray-100 duration-200 pt-2">
            <div className="flex flex-col text-blue-800 w-full">
              <div>
                <label
                  htmlFor="choose-city"
                  className="block sm:text-xl leading-5 font-medium text-blue-800"
                >
                  City
                </label>
                <select
                  id="choose-city"
                  aria-label="choose-city"
                  className="h-full w-full pl-2 pr-7 -py-2 bg-transparent form-select text-gray-800 sm:leading-5 mt-1"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="Toronto">Toronto</option>
                  <option value="Montreal">Montreal</option>
                  <option value="Calgary">Calgary</option>
                  <option value="Ottawa">Ottawa</option>
                  <option value="Vancouver">Vancouver</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Results Section */}
        <div className="flex flex-col md:w-3/5 w-full">
          <div className="flex flex-col space-y-4">
            <div className="py-2 text-white bg-secondary border-orange-500 border-t-4 md:border-t-0 rounded-t-lg rounded-b-none">
              <div className="w-full flex leading-6 font-sans font-semibold justify-center items-center text-3xl">
                <div className="mr-2 relative">
                  <img
                    alt=""
                    src="/static/icons/calculators/output.svg"
                    decoding="async"
                    data-nimg="fixed"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 40,
                      height: 40,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      objectPosition: "center center",
                    }}
                  />
                </div>
                Results
              </div>
            </div>
            <div className="flex flex-col px-4 pb-4 space-y-4">
              <div className="bg-gray-100 p-2 hover:bg-white rounded shadow">
                <div className="flex flex-col">
                  <span className="leading-5 font-medium sm:text-xl text-blue-800 text-center">
                    Monthly Condo Fee
                  </span>
                  <span className="mt-2 text-center text-2xl font-semibold">
                    ${monthlyFee}
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 p-2 hover:bg-white rounded shadow">
                <div className="flex flex-col">
                  <span className="leading-5 font-medium sm:text-xl text-blue-800 text-center">
                    Annual Condo Fee
                  </span>
                  <span className="mt-2 text-center text-2xl font-semibold">
                    ${yearlyFee}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
