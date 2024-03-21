"use client";
import React from "react";
import { useState, useEffect } from "react";
import SetUpFacilityPage from "./form";
import Link from "@/node_modules/next/link";

interface Property {
  bid: number;
  name: string;
  unitcount: number;
  parkingcount: number;
  lockercount: number;
  address: string;
  propertyfile: string;
  propertyimage: string;
}

export default function SetUpFacility() {
  const [properties, setProperties] = useState<Property[]>([]);
  useEffect(() => {
    fetch("/api/getproperties", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProperties(data.properties);
        console.log(data);
      });
  }, []);
  console.log("Properties: " + properties);
  const [propertySelected, setPropertySelected] = useState(false);

  return (
    <>
      {propertySelected ? (
        <div className="my-5 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Select Property to add a New Facility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {properties.length !== 0 &&
              properties.map((property) => (
                <div
                  key={property.bid}
                  className="border border-gray-300 rounded-lg shadow p-4 flex flex-col item-center gap-2"
                >
                  <img
                    className="propertyImage"
                    src={property.propertyimage}
                    alt={`Property ${property.bid}`}
                    onLoad={() => {
                      console.log(property.propertyimage);
                    }}
                  />
                  <div className="text-left flex flex-col gap-2">
                    <p className="font-semibold">{property.name}</p>
                    <p>
                      <span className="font-normal">Address:</span>{" "}
                      {property.address}
                    </p>
                    <div className="flex w-full">
                      <div className="flex w-full gap-2">
                        <div
                          className="globalBtn w-1/4 p-1 text-white text-center"
                          style={{ backgroundColor: "#000" }}
                        >
                          <span>Property {property.bid}</span>
                        </div>
                        <div className="w-1/6">
                          <Link href="Properties/Edit" as={`Properties/Edit`}>
                            <button
                              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                              type="submit"
                            >
                              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Select Property
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col w-1/5">
                        <Link
                          href={`Properties/viewproperty/${property.bid}`}
                        ></Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <SetUpFacilityPage />
      )}
      ;
    </>
  );
}
