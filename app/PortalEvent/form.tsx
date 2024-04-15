"use client"
import React, { useState, ChangeEvent } from 'react';

const Form = () => {
    const [attendees, setAttendees] = useState([
        { name: "Alex Johnson", checked: false },
        { name: "Casey Smith", checked: false },
        { name: "Jordan Leigh", checked: false },
        { name: "Pat Taylor", checked: false },
        { name: "Sam Dylan", checked: false }
      ]);
      const [dropdownOpen, setDropdownOpen] = useState(false);
    
      const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    
      const handleCheckboxChange = (index: number) => {
        const newAttendees = [...attendees];
        newAttendees[index].checked = !newAttendees[index].checked;
        setAttendees(newAttendees);
      };

  return (
    <div className="bg-yellow-300 bg-opacity-40 min-h-screen pt-16 flex justify-center items-start relative">
        <div className="fixed left-0 top-0 bottom-0 w-1/3 flex items-center justify-center" style={{ left: '-40px', zIndex: -1 }}>
            <img src="/imgbin_architectural-drawing-architecture-sketch-building-png.png" alt="Condo" className="h-auto w-full max-h-80vh opacity-75" />
        </div>
        <div className="fixed right-0 top-0 bottom-0 w-1/3 flex items-center justify-center" style={{ right: '-40px', zIndex: -1 }}>
            <img src="/imgbin_drawing-building-architecture-png.png" alt="Condo" className="h-auto w-full max-h-80vh opacity-75" />
        </div>

        <form className="bg-white shadow-xl rounded-lg p-8 mt-8 w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Create Event</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Add title
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Event Title" />
            </div>

            <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Add required attendees
            </label>
            <button type="button" onClick={toggleDropdown} className="shadow border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none">
                Select Attendees
            </button>
            {dropdownOpen && (
                <div className="absolute shadow border rounded w-full mt-1 bg-white z-10">
                {attendees.map((attendee, index) => (
                    <label key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={attendee.checked}
                        onChange={() => handleCheckboxChange(index)}
                        className="form-checkbox h-5 w-5"
                    />
                    <span>{attendee.name}</span>
                    </label>
                ))}
                </div>
            )}
            </div>


        <div className="flex items-center mb-4">
          <div className="flex-grow">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
              Start Date
            </label>
            <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startDate" type="date" />
          </div>
          <div className="flex-grow">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
              End Date
            </label>
            <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" type="date" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Add location
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Location" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows={5} placeholder="Type details for this new meeting"></textarea>
        </div>

        <div className="flex items-center justify-between mt-6">
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300" type="submit">
                Save
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg transition-colors duration-300" type="button">
                Close
              </button>
        </div>
            
        </form>
    </div>
  );
}

export default Form;