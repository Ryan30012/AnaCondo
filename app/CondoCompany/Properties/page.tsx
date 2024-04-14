"use client";
import { useEffect, useState } from "react";
import React from "react";
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

const PropertyList: React.FC = () => {
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

  return (
    <div className="p-4">
      <div className="my-5 text-center">
        <h2 className="text-xl font-semibold mb-4">Property List</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {properties.length !== 0 &&
            properties.map((property) => (
              <div
                key={property.bid}
                className="p-4 flex flex-col item-center gap-2"
                style={{
                  boxShadow: "1px 1px 4px 2px #A2A2A2",
                  borderRadius: "0.25rem",
                }}
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
                        className="globalBtn p-1 text-white text-center"
                        style={{ backgroundColor: "#000" }}
                      >
                        <span>Property {property.bid}</span>
                      </div>
                      <div className="">
                        <Link href="Properties/Edit" as={`Properties/Edit`}>
                          <button
                            className="editBtn globalBtn w-full"
                            type="button"
                          >
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <Link href={`Properties/viewproperty/${property.bid}`}>
                        <button className="globalBtn w-full viewBtn">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-8">
          <Link href="Properties/Add" as={`Properties/Add`}>
            <button className="text-white biggerBtn addBtn" type="button">
              Add New Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
