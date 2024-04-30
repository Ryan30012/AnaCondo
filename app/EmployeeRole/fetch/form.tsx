"use client";

import React, { useEffect, useState } from 'react';

interface Employee {
  eid: number;
  uname: string;
  fname: string;
  lname: string;
  role: string;
}

const FetchEmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('/api/employees');
        const data = await response.json();
        setEmployees(data.employees);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="bg-yellow-300 bg-opacity-40 min-h-screen pt-16 relative">
      <div className="fixed left-0 top-0 bottom-0 w-1/3 flex items-center justify-center z-0" style={{ left: '-40px'}}>
        <img src="/imgbin_architectural-drawing-architecture-sketch-building-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
      </div>
      <div className="fixed right-0 top-0 bottom-0 w-1/3 flex items-center justify-center z-0" style={{ right: '-40px'}}>
        <img src="/imgbin_drawing-building-architecture-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
      </div>
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-lg relative z-10 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Employee List</h1>
        {employees.length > 0 ? (
          employees.map(employee => (
            <div key={employee.eid} className="mb-4">
              <h3 className="text-lg font-semibold">{employee.fname} {employee.lname}</h3>
              <p>ID: {employee.eid}</p>
              <p>Username: {employee.uname}</p>
              <p>Role: {employee.role}</p>
            </div>
          ))
        ) : (
          <p>No employees found.</p>
        )}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="http://localhost:3000/EmployeeRole/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Employee</a>
          <a href="http://localhost:3000/EmployeeRole/update" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Employee</a>
        </div>
      </div>
    </div>
  );
};

export default FetchEmployeeList;

