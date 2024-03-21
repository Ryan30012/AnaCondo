import React from 'react';
import poolFacility from './assets/poolFacility.jpeg';
import tennisFacility from './assets/tennisFacility.jpeg';
import terraseFacility from './assets/terraseFacility.jpeg';
import gymFacility from './assets/gymFacility.jpeg';
import bbqFacility from './assets/bbqFacility.jpeg';
import conferenceRoomFacility from './assets/conferenceRoomFacility.jpeg';

const ReservationPics = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="container relative">
          <img 
            src="poolFacility" 
            alt="pool" 
            className="image object-cover w-full h-auto opacity-100 transition duration-500 ease-in-out" />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
                Pool Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <img 
            src="tennisFacility" 
            alt="tennis" 
            className="image object-cover w-full h-auto opacity-100 transition duration-500 ease-in-out" />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
                Tennis Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <img 
            src="terraseFacility" 
            alt="terrace" 
            className="image object-cover w-full h-auto opacity-100 transition duration-500 ease-in-out" />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
                Terrace Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <img 
            src="gymFacility" 
            alt="gym" 
            className="image object-cover w-full h-auto opacity-100 transition duration-500 ease-in-out" />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
                Gym Facility
            </div>
          </div>
        </div>
        <div className="container relative">
          <img 
            src="bbqFacility" 
            alt="bbq" 
            className="image object-cover w-full h-auto opacity-100 transition duration-500 ease-in-out" />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
                BBQ Facility</div>
          </div>
        </div>
        <div className="container relative">
          <img 
            src="conferenceRoomFacility" 
            alt="conference" 
            className="image object-cover w-full h-auto opacity-100 transition duration-500 ease-in-out" />
          <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
            <div className="text bg-green-600 text-white font-bold text-center py-2 px-4 rounded">
                Conference Room Facility</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPics;
