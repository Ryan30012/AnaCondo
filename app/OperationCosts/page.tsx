"use client";

import { FormEvent } from "react";
import Form from './form';
import EditCostsForm from "./editCosts";

import React, { useState } from 'react';



const ViewOperationCosts: React.FC = () => {
    var arrProperties, property, budget, cost, oid;

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
        <div className="relative rounded-xl overflow-auto container mx-auto">
            <div className="shadow-sm overflow-hidden my-8">
                <table className="border-collapse table-auto w-full m-3">
                    <thead>
                        <tr className="relative bg-lime-500 rounded p-4">
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Property</th>
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Budget</th>
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Cost</th>
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">Modify Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b border-slate-100 p-4 pl-8">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className="border-b border-slate-100 p-4 pl-8">Malcolm Lockyer</td>
                            <td className="border-b border-slate-100 p-4 pl-8">1961</td>
                            <EditCostsForm 
                                property={property}
                                budget={budget}
                                cost={cost}
                                ownerID={oid}
                            />
                        </tr>
                        <tr>
                            <td className="border-b border-slate-100 p-4 pl-8">Witchy Woman</td>
                            <td className="border-b border-slate-100 p-4 pl-8">The Eagles</td>
                            <td className="border-b border-slate-100 p-4 pl-8">1972</td>
                        </tr>
                        <tr>
                            <td className="border-b border-slate-100 p-4 pl-8">Shining Star</td>
                            <td className="border-b border-slate-100 p-4 pl-8">Earth, Wind, and Fire</td>
                            <td className="border-b border-slate-100 p-4 pl-8">1975</td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </div>
    );
};

export default ViewOperationCosts;