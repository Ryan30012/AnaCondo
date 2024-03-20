import React, { useState } from 'react';

const EmployeeTaskList: React.FC = () => {
    const tasks = [
      {
        taskName: 'Check requests',
        startDate: '2024-03-01',
        endDate: '2024-03-15',
        description: 'Review and validate new incoming requests from residents.'
      },
      {
        taskName: 'Inspect facilities',
        startDate: '2024-03-02',
        endDate: '2024-03-16',
        description: 'Perform a detailed inspection of all communal facilities.'
      },
      {
        taskName: 'Fire safety checks',
        startDate: '2024-03-05',
        endDate: '2024-03-19',
        description: 'Ensure all fire safety equipment is up-to-date and functional.'
      },
      {
        taskName: 'Financial report',
        startDate: '2024-03-10',
        endDate: '2024-03-24',
        description: 'Prepare a financial report for the upcoming board meeting.'
      },
      {
        taskName: 'Tenant communication',
        startDate: '2024-03-12',
        endDate: '2024-03-26',
        description: 'Draft and send communication to tenants regarding policy updates.'
      },
      {
        taskName: 'Landscape maintenance',
        startDate: '2024-03-15',
        endDate: '2024-03-29',
        description: 'Oversee the maintenance work on the landscape and communal gardens.'
      },
      {
        taskName: 'Security review',
        startDate: '2024-03-20',
        endDate: '2024-04-03',
        description: 'Conduct a thorough review of the security systems and protocols.'
      }
    ];
  
    return (
      <div className="bg-yellow-300 bg-opacity-40 min-h-screen pt-16 relative">  
        <div className="fixed left-0 top-0 bottom-0 w-1/3 flex items-center justify-center -z-10" style={{ left: '-40px'}}>
          <img src="/imgbin_architectural-drawing-architecture-sketch-building-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
        </div>
        <div className="fixed right-0 top-0 bottom-0 w-1/3 flex items-center justify-center -z-10" style={{ right: '-40px'}}>
          <img src="/imgbin_drawing-building-architecture-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
        </div>
        <div className="w-full max-w-4xl mx-auto z-10 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Task List</h1>
          <div className="overflow-x-auto relative">
            {/* Table header */}
            <div className="sticky top-0 z-10">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="w-1/4 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Task Name
                    </th>
                    <th className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      End Date
                    </th>
                    <th className="w-2/5 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            
            {/* Table body */}
            <div className="max-h-96 overflow-y-auto">
              <table className="min-w-full leading-normal">
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={index}>
                      <td className="w-1/4 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {task.taskName}
                      </td>
                      <td className="w-1/6 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {task.startDate}
                      </td>
                      <td className="w-1/6 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {task.endDate}
                      </td>
                      <td className="w-2/5 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {task.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EmployeeTaskList;