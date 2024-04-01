"use client";

import React, { useEffect, useState } from "react";

type PropertyFee = {
    property: string;
    fee: number;
  };

  export const AnnualFinanceReport: React.FC = () => {
    const [feesData, setFeesData] = useState<PropertyFee[]>([]);
    const [totalFees, setTotalFees] = useState(0);
  
    useEffect(() => {
      const fetchCollectedFees = async () => {
        try {
          // Fetch collected fees data when the component mounts
          const response = await fetch("/api/collected-fees");
          if (response.ok) {
            const data = await response.json();
            setFeesData(data);
            
            // Calculate total collected fees
            const total = data.reduce((acc: number, property: PropertyFee) => acc + property.fee, 0);
            setTotalFees(total);
          } else {
            throw new Error("Failed to fetch collected fees data");
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCollectedFees();
    }, []);
  
    return (
      <div className="bg-yellow-300 bg-opacity-40 min-h-screen relative">
        <div className="flex flex-col h-full text-white p-4">
  
          <div className="relative">
            {/* Retain the image sources */}
            <div
              className="fixed left-0 top-0 bottom-0 w-1/3 flex items-center justify-center z-0"
              style={{ left: "-40px", top: "90px" }}
            >
              <img
                src="/imgbin_architectural-drawing-architecture-sketch-building-png.png"
                alt="Condo"
                className="h-auto w-full max-h-80vh"
              />
            </div>
            <div
              className="fixed right-0 top-0 bottom-0 w-1/3 flex items-center justify-center z-0"
              style={{ right: "-40px", top: "90px" }}
            >
              <img
                src="/imgbin_drawing-building-architecture-png.png"
                alt="Condo"
                className="h-auto w-full max-h-80vh"
              />
            </div>
  
          </div>
  
          {/* Render collected fees data */}
          <div className="grid grid-cols-2 gap-2">
            {feesData.map((property, index) => (
              <div key={index} className="bg-gray-800 p-2 rounded">
                <p className="text-lg font-bold text-gray-300">{property.property}</p>
                <p className="text-sm font-bold text-gray-300">Collected Fee: ${property.fee}</p>
              </div>
            ))}
          </div>
  
          {/* Render total collected fees */}
          <p className="text-lg font-bold text-gray-300">Total Collected Fees: ${totalFees}</p>
          
        </div>
      </div>
    );
  };
  
  export default AnnualFinanceReport;