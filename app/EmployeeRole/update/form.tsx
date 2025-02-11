"use client";

import React, { useState } from 'react';

interface IUpdateEmployeeInputs {
  eid: string;
  role: string;
}

const UpdateEmployeeForm: React.FC = () => {
  const [inputs, setInputs] = useState<IUpdateEmployeeInputs>({
    eid: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/employee_roles/update', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
  
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Failed to update employee role:", error);
      alert("Failed to update employee role");
    }
  };

  return (
    <div className="bg-yellow-300 bg-opacity-40 min-h-screen pt-16 relative">
      
      <div className="fixed left-0 top-0 bottom-0 w-1/3 flex items-center justify-center z-0" style={{ left: '-40px'}}>
        <img src="/imgbin_architectural-drawing-architecture-sketch-building-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
      </div>
      <div className="fixed right-0 top-0 bottom-0 w-1/3 flex items-center justify-center z-0" style={{ right: '-40px'}}>
        <img src="/imgbin_drawing-building-architecture-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
      </div>
  
      <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-8 rounded shadow-lg relative z-10 max-w-md mx-auto">
      <div className="flex justify-between mb-4">
          <a href="http://localhost:3000/EmployeeRole/fetch" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</a>
          <h1 className="text-xl font-bold">Add Employee</h1>
        </div>
        <h1 className="text-2xl font-bold mb-4">Update Employee Role</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eid">Employee ID</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="eid"
            value={inputs.eid}
            onChange={handleChange}
            placeholder="Employee ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">Role</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="role"
            value={inputs.role}
            onChange={handleChange}
            placeholder="Role"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Update Role
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployeeForm;