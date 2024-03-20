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

  return (
    <div className="p-4">
      <div className="my-5 text-center">
        <h2 className="text-xl font-semibold mb-4">Property List</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div
              key={property.bid}
              className="border border-gray-300 rounded-lg shadow p-4 flex flex-col item-center"
            >
              <img
                className="propertyImage"
                src={property.propertyimage}
                alt={`Property ${property.bid}`}
                onLoad={() => {
                  console.log(property.propertyimage);
                }}
              />
              <div className="text-left">
                <p className="font-semibold">{property.name}</p>
                <p>
                  <span className="font-normal">Address:</span>{" "}
                  {property.address}
                </p>
                <span className="bg-green-500 text-white p-1 rounded text-sm mt-2 inline-block">
                  Property {property.bid}
                </span>
                <Link href="Properties/Edit" as={`Properties/Edit`}>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mt-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="Properties/Add" as={`Properties/Add`}>
            <button
              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
            >
              Add New Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
