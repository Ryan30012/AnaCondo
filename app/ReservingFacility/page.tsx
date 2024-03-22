"use client";
import React from "react";
import { useState, useEffect } from "react";
import ReserveFacilityPage from "./form";
import { useSession } from "next-auth/react";
import Link from "next/link";

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

interface Facility {
  fid: number;
  bid: number;
  count: number;
  name: string;
  location: string | null;
  accesscard: boolean | null;
  description: string | null;
}

export default function ReserveFacility() {
  const [buildings, setBuildings] = useState<Property[]>([]);
  const [buildingSelected, setBuildingSelected] = useState(false);
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const session = useSession();
  const uid = session.data?.uid;

  useEffect(() => {
    if (uid != null || uid != undefined) {
      fetch(`/api/getownerpropertiesbuildings?uid=${uid}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setBuildings(data.buildings);
          console.log(data);
        });
    }
  }, [session]);

  const handlePropertyClick = async (buildingId: number) => {
    const facilityResponse = await fetch(
      `/api/getbuildingfacilities?bid=${buildingId}`,
      {
        method: "GET",
      }
    );
    if (facilityResponse.ok) {
      setBuildingSelected(true);
      const facilityData = await facilityResponse.json();
      setFacilities(facilityData.facilities);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 mt-8">
      {buildings.length !== 0 && !buildingSelected ? (
        <div className="flex selectProperties gap-4">
          {buildings.map((property) => (
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
              <div className="text-left flex flex-col gap-2 w-full">
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
      ) : (
        <ReserveFacilityPage facilities={facilities} />
      )}
    </div>
  );
}
