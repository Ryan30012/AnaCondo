"use client";
import React from "react";
import { useState, useEffect } from "react";
import SetUpFacilityPage from "./form";
import Link from "@/node_modules/next/link";
import { useSession } from "next-auth/react";

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
  const [propertySelected, setPropertySelected] = useState(false);
  const [propertyId, setPropertyId] = useState(0);
  const session = useSession();
  const uid = session.data?.uid;

  useEffect(() => {
    if (uid != null || uid != undefined) {
      fetch("/api/getproperties", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setProperties(data.properties);
          console.log(data);
        });
    }
  }, [session]);
  console.log("Properties: " + properties);
  const handlePropertyClick = async (buildingId: number) => {
    setPropertyId(buildingId);
    setPropertySelected(true);
  };

  return (
    <div className="flex items-center justify-center p-4 mt-4">
      {!propertySelected ? (
        <div className="my-5 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Select a Property to add a New Facility
          </h2>
          <div className="flex selectProperties gap-4">
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
                      <div
                        className="flex gap-2 justify-between items-end"
                        style={{ minWidth: "100%" }}
                      >
                        <div
                          className="globalBtn p-1 text-white text-center flex items-center"
                          style={{ backgroundColor: "#000", fontSize: "14px" }}
                        >
                          <p style={{ minWidth: "100%" }}>
                            Property {property.bid}
                          </p>
                        </div>
                        <div className="flex" style={{ fontSize: "14px" }}>
                          <button
                            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                            type="submit"
                            onClick={() => {
                              handlePropertyClick(property.bid);
                            }}
                          >
                            <span className="relative p-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Select Property
                            </span>
                          </button>
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
        <SetUpFacilityPage bid={propertyId} />
      )}
      ;
    </div>
  );
}
