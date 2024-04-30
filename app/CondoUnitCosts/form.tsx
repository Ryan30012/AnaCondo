/*"use client";

import React, { useState } from 'react';


//use post method to link route ts with set condo unit cost to link with page.tsx

// Type definition for the state
interface ICostInputs {
  costPerSquareFoot: string;
  feePerParkingSpot: string;
}

const CondoCostsPage: React.FC = () => {
  const [inputs, setInputs] = useState<ICostInputs>({ costPerSquareFoot: '', feePerParkingSpot: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // implement the submission logic here (sending the data to an API)
    console.log(inputs);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold my-4">Set Condo Unit Costs</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
          <label htmlFor="costPerSquareFoot" className="block text-lg font-medium text-gray-700">
            Cost per square foot:
          </label>
          <input
            type="number"
            id="costPerSquareFoot"
            name="costPerSquareFoot"
            value={inputs.costPerSquareFoot}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="feePerParkingSpot" className="block text-lg font-medium text-gray-700">
            Added fee per parking spot:
          </label>
          <input
            type="number"
            id="feePerParkingSpot"
            name="feePerParkingSpot"
            value={inputs.feePerParkingSpot}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Submit Costs
          </button>
        </div>
      </form>
    </div>
  );
};

export default CondoCostsPage;*/

"use client";

import React, { useState } from 'react';

interface ICostInputs {
  buildingId: string;
  condoUnitId: string;
  costPerSquareFoot: string;
  parkingId: string; 
  feePerParkingSpot: string;
}

const CondoCostsForm: React.FC = () => {
  const [inputs, setInputs] = useState<ICostInputs>({
    buildingId: '',
    condoUnitId: '',
    costPerSquareFoot: '',
    parkingId: '',
    feePerParkingSpot: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/set-condo-unit-cost', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bid: inputs.buildingId,
          cuid: inputs.condoUnitId,
          condoFee: inputs.costPerSquareFoot,
          pid: inputs.parkingId,
          parkingFee: inputs.feePerParkingSpot,
        }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Failed to set condo unit cost:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="buildingId"
        value={inputs.buildingId}
        onChange={handleChange}
        placeholder="Building ID"
      />
      <input
        type="text"
        name="condoUnitId"
        value={inputs.condoUnitId}
        onChange={handleChange}
        placeholder="Condo Unit ID"
      />
      <input
        type="text"
        name="costPerSquareFoot"
        value={inputs.costPerSquareFoot}
        onChange={handleChange}
        placeholder="Cost per Square Foot"
      />
      <input
        type="text"
        name="parkingId"
        value={inputs.parkingId}
        onChange={handleChange}
        placeholder="Parking ID"
      />
      <input
        type="text"
        name="feePerParkingSpot"
        value={inputs.feePerParkingSpot}
        onChange={handleChange}
        placeholder="Fee per Parking Spot"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CondoCostsForm;

