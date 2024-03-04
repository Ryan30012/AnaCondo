// page.tsx
import React, { useState } from 'react';

const AddPropertyPage: React.FC = () => {
  

  return (
    <div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">Add New Property</h1>
  <form>
    <div className="mb-4">
      <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">Property ID</label>
      <input type="text" id="id" name="id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Property Name</label>
      <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
      <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
      <input type="text" id="location" name="location" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
      <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Property Image</label>
      <input type="file" id="image" name="image" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Property</button>
  </form>
</div>

  );
};

export default AddPropertyPage;
