"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";

interface Property {
  bid: number;
  name: string;
  unitcount: number;
  parkingcount: number;
  lockercount: number;
  address: string;
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
                          className="editBtn globalBtn w-full"
                          type="button"
                        >
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href={`Properties/viewproperty/${property.bid}`}
                    ></Link>
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
