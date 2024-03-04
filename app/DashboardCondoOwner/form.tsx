"use client";

import React from 'react';

class DashboardCondoOwner extends React.Component {

  render() {
    const data = [
      { column1: 'Property 1', column2: 'Address 1', column3: 'Balance 1', column4: ' 1', column5: 'Image 1' },
      { column1: 'Property 2', column2: 'Address 2', column3: 'Balance 2', column4: ' 2', column5: 'Image 2' },
      { column1: 'Property 3', column2: 'Address 3', column3: 'Balance 3', column4: ' 3', column5: 'Image 3' },
      { column1: 'Property 4', column2: 'Address 4', column3: 'Balance 4', column4: ' 4', column5: 'Image 4' },
      { column1: 'Property 5', column2: 'Address 5', column3: 'Balance 5', column4: ' 5', column5: 'Image 5' },
      { column1: 'Property 6', column2: 'Address 6', column3: 'Balance 6', column4: ' 6', column5: 'Image 6' },
      { column1: 'Property 7', column2: 'Address 7', column3: 'Balance 7', column4: ' 7', column5: 'Image 7' },
      { column1: 'Property 8', column2: 'Address 8', column3: 'Balance 8', column4: ' 8', column5: 'Image 8' },
      { column1: 'Property 9', column2: 'Address 9', column3: 'Balance 9', column4: ' 9', column5: 'Image 9' },
      { column1: 'Property 10', column2: 'Address 10', column3: 'Balance 10', column4: ' 10', column5: 'Image 10' },
    ];

    return (
      <div className="flex flex-col h-full text-white p-4">
        <h1 className="mb-4 text-3xl font-semibold bg-gray-800 text-white p-2">Property Dashboard</h1>
        
        <div className="w-90%">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-3 border">Property Names</th>
                <th className="p-3 border">Address</th>
                <th className="p-3 border">Balance</th>
                <th className="p-3 border">Requests</th>
                <th className="p-3 border">Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-900'}>
                  <td className="p-3 border">{row.column1}</td>
                  <td className="p-3 border">{row.column2}</td>
                  <td className="p-3 border">{row.column3}</td>
                  <td className="p-3 border"><a href="/" className="text-blue-400 underline cursor-pointer">{row.column4}</a></td>
                  <td className="p-3 border">{row.column5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default DashboardCondoOwner;

/** 
import React, { useEffect, useState } from 'react';

interface Property {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
}

const DashboardCondoOwner: React.FC = () => {
  const [data, setData] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/properties");
        const { data } = await response.json();
        setData(data || []);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-full text-white p-4">
      <h1 className="mb-4 text-3xl font-semibold bg-gray-800 text-white p-2">Property Dashboard</h1>
      
      <div className="w-90%">
        {loading ? (
          <p>Loading...</p> // Display loading indicator while data is being fetched
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-3 border">Property Names</th>
                <th className="p-3 border">Address</th>
                <th className="p-3 border">Balance</th>
                <th className="p-3 border">Requests</th>
                <th className="p-3 border">Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-900'}>
                  <td className="p-3 border">{row.column1}</td>
                  <td className="p-3 border">{row.column2}</td>
                  <td className="p-3 border">{row.column3}</td>
                  <td className="p-3 border"><a href="/" className="text-blue-400 underline cursor-pointer">{row.column4}</a></td>
                  <td className="p-3 border">{row.column5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardCondoOwner;
*/