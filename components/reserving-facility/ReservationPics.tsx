import React from "react";
import Image from "@/node_modules/next/image";
import poolFacility from "../../assets/poolFacility.jpeg";
import tennisFacility from "../../assets/tennisFacility.jpeg";
import terraceFacility from "../../assets/terraseFacility.jpeg";
import gymFacility from "../../assets/gymFacility.jpeg";
import bbqFacility from "../../assets/bbqFacility.jpeg";
import conferenceRoomFacility from "../../assets/conferenceRoomFacility.jpeg";

const ReservationPics = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="container relative">
          <Image
            src={poolFacility}
            alt="pool"
            className="image object-cover aspect-square w-full h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Pool Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <Image
            src={tennisFacility}
            alt="tennis"
            className="image object-cover w-full h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Tennis Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <Image
            src={terraceFacility}
            alt="Terrace"
            className="image object-cover w-full h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Terrace Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <Image
            src={gymFacility}
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
            src={bbqFacility}
            alt="BBQ"
            className="image object-cover w-full aspect-video h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              BBQ Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <Image
            src={conferenceRoomFacility}
            alt="Conference Room"
            className="image object-cover w-full aspect-video h-auto hover:opacity-40 opacity-100 transition duration-500 ease-in-out"
          />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
              Conference Room Facility
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPics;
