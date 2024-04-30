"use client";

import React, { useEffect, useState } from "react";

interface PropertyFee {
  property: string;
  condoFee: number;
  parkingFee: number | null;
}

export const AnnualFinanceReport: React.FC = () => {
  const [feesData, setFeesData] = useState<PropertyFee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCondoUnitCosts = async () => {
      try {
        const response = await fetch("/api/set-condo-unit-cost", {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Successfully fetched condo unit costs:", data); // Log the fetched data
          setFeesData(data);
          setLoading(false);
        } else {
          console.error("Failed to fetch condo unit costs:", response.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching condo unit costs:", error);
        setLoading(false);
      }
    };

    fetchCondoUnitCosts();
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
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Annual Finance Report</h1>
        <div className="overflow-x-auto relative px-4">
          <table className="w-full leading-normal">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Condo Fee
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Parking Fee
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={3} className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Loading...</td>
                </tr>
              ) : (
                feesData.map((property, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{property.property}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">${property.condoFee}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">${property.parkingFee || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnnualFinanceReport;

