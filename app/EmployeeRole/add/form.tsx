"use client";

import React, { useState } from 'react';

const AddEmployeeForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    uname: '',
    role: '',
    Fname: '',
    Lname: '',
    username: '',
    DOB: '',
    Address: '',
    Phone: '',
    Email: '',
    Password: '',
    AccountType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/employee_roles/add_employee', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
  
      const data = await response.json();
      console.log(data);
      alert(data.message);
    } catch (error) {
      console.error("Failed to add employee:", error);
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
  
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-lg relative z-10">
        <div className="flex justify-between mb-4">
          <a href="http://localhost:3000/EmployeeRole/fetch" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</a>
          <h1 className="text-xl font-bold">Add Employee</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="uname" className="block text-gray-700 text-sm font-bold mb-2">User Name</label>
          <input
            type="text"
            name="uname"
            value={inputs.uname}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Role</label>
          <input
            type="text"
            name="role"
            value={inputs.role}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Fname" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            name="Fname"
            value={inputs.Fname}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Lname" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            name="Lname"
            value={inputs.Lname}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="DOB" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
          <input
            type="date"
            name="DOB"
            value={inputs.DOB}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            name="Address"
            value={inputs.Address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
          <input
            type="text"
            name="Phone"
            value={inputs.Phone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="Email"
            value={inputs.Email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="Password"
            value={inputs.Password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="AccountType" className="block text-gray-700 text-sm font-bold mb-2">Account Type</label>
          <input
            type="text"
            name="AccountType"
            value={inputs.AccountType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Employee</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeForm;

