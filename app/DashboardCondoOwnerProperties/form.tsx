"use client";

import React, { useEffect, useState } from "react";

interface Property {
  id: number;
  property_name: string;
  address: string;
  balance: string;
  requests: string;
  image_url: string;
}

export const DashboardCondoOwnerProperties: React.FC = () => {
  const [data, setData] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/auth/properties");
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
    <div className="bg-yellow-300 bg-opacity-40 min-h-screen pt-16 relative">
        <div className="fixed left-0 top-0 bottom-0 w-1/3 flex items-center justify-center -z-10" style={{ left: '-40px' }}>
            <img src="/imgbin_architectural-drawing-architecture-sketch-building-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
        </div>
        <div className="fixed right-0 top-0 bottom-0 w-1/3 flex items-center justify-center -z-10" style={{ right: '-40px' }}>
            <img src="/imgbin_drawing-building-architecture-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
        </div>

        <div className="w-full max-w-8xl mx-auto z-10 bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6">Property Dashboard</h1>
            <div className={`${isMobile ? '' : 'overflow-x-auto relative px-4'}`}>
                {isMobile ? (
                    <div className="grid grid-cols-1 gap-6">
                        {loading ? (
                            <div className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Loading...</div>
                        ) : (
                            data.map((property, index) => (
                                <div key={property.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} p-4 rounded-md shadow-md`}>
                                    <p><span className="font-semibold">Property Name:</span> {property.property_name}</p>
                                    <p><span className="font-semibold">Address:</span> {property.address}</p>
                                    <p><span className="font-semibold">Balance:</span> {property.balance}</p>
                                    <p><span className="font-semibold">Requests:</span> <a href="/" className="text-blue-400 underline">{property.requests}</a></p>
                                    <p><span className="font-semibold">Image:</span> <img src={property.image_url} alt={property.property_name} className="max-w-full h-auto" /></p>
                                </div>
                            ))
                        )}
                    </div>
                ) : (
                    <table className="w-full leading-normal">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Property Names
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Address
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Balance
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Requests
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Image
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Loading...</td>
                                </tr>
                            ) : (
                                data.map((property, index) => (
                                    <tr key={property.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{property.property_name}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{property.address}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{property.balance}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <a href="/" className="text-blue-400 underline">{property.requests}</a>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{property.image_url}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    </div>
);
};

export default DashboardCondoOwnerProperties;