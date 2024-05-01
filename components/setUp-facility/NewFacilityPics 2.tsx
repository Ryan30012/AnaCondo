import React from "react";
import Image from "@/node_modules/next/image";
import gardenFac from "../../assets/gardenFac.jpeg";
import gymFac from "../../assets/gymFac.jpeg";
import officeFac from "../../assets/officeFac.jpeg";
import roofFac from "../../assets/roofFac.jpeg";
import satFac from "../../assets/satFac.jpeg";
import tennisFac from "../../assets/tennisFac.jpeg";

const NewFacilityPics = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="container relative">
          <Image
            src={gardenFac}
            alt="garden"
            className="image object-cover w-full aspect-video h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Garden Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <Image
            src={tennisFac}
            alt="tennis"
            className="image object-cover w-full aspect-video h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Tennis Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <Image
            src={roofFac}
            alt="Terrace"
            className="image object-cover w-full aspect-video h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Terrace Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <Image
            src={gymFac}
            alt="Gym"
            className="image object-cover w-full aspect-video h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Gym Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <Image
            src={officeFac}
            alt="office"
            className="image object-cover w-full aspect-video h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Office Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <Image
            src={satFac}
            alt="Sitting Room"
            className="image object-cover w-full aspect-video h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Sitting Room
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFacilityPics;
