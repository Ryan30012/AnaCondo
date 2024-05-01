"use client";

import { FormEvent } from "react";
import Form from './form';
import EditCostsForm from "./editCosts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


interface UnitOperations {
    operationID: string;
    budget: string;
    cost: string;
    unitID: string;
    ownerID: string;
}

export default function viewOperationCosts(props: any) {
    const ownerID = props.ownderid;
    const condoUnits = props.condounits;
    const operations = props.operations;  
    const [inputs, setInputs] = useState<UnitOperations>({
        operationID: "",
        budget: "",
        cost: "",
        unitID: "",
        ownerID: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/select-operation-costs', { 
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                operationID: inputs.operationID,
                budget: inputs.budget,
                cost: inputs.cost,
                unitID: inputs,
                ownerID: "",
              }),
            });
        
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error("Failed to modify operation costs", error);
          }

    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });    }
    

    // create rows containing each property's info
    const rows = [];
    for(let i = 0; i < condoUnits.length; i++){
        let temp = { operationID: operations[i].oid, 
                        budget: operations[i].budget, 
                        cost: operations[i].cost, 
                        unitID: condoUnits[i].cuid,
                        ownerID: operations[i].ownerid
        };

        /*let operationID = operations[i].oid, budget = operations[i].budget, cost = operations[i].cost, unitID= condoUnits[i].cuid, ownerID= operations[i].ownerid;
                <!--<button 
                    onClick={handleClick(operations[i].oid, operations[i].budget, operations[i].cost, condoUnits[i].cuid, operations[i].ownerid)}>
                        Modify
                </button>-->

                                <Link 
                    className="bg-lime-600 hover:bg-black hover:font-semibold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    to={{pathname: "/EditOperations", state: {childState}}}>Modify</Link>
        */
        const row = (
            <tr>
                <td className="border-b border-slate-100 p-4 pl-8">{condoUnits[i].cuid}</td>
                <td className="border-b border-slate-100 p-4 pl-8">{operations[i].budget}</td>
                <td className="border-b border-slate-100 p-4 pl-8">{operations[i].cost}</td>
                <Popup trigger={<button className="bg-lime-600 hover:bg-black hover:font-semibold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Modify</button>} position="right center">
                    <div className="container mx-auto p-4">
                        <h1 className="text-center text-2xl font-bold my-4">Modify Operation Costs of Unit {condoUnits[i].cuid}</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">Budget</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="budget"
                                    value={operations[i].budget}
                                    onChange={handleChange}
                                    placeholder="Budget"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cost">Cost</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="cost"
                                    value={operations[i].cost}
                                    onChange={handleChange}
                                    placeholder="Cost"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="bg-lime-600 hover:bg-black hover:font-semibold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </Popup>
            </tr>
        );
        rows.push(row);
        console.log(rows);
    }

    // display html
    return (
        <div className="relative rounded-xl overflow-auto container mx-auto">
            <div className="shadow-sm overflow-hidden my-8">
                <table className="border-collapse table-auto w-full m-3">
                    <thead>
                        <tr className="relative bg-lime-500 rounded p-4">
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 text-left">Property</th>
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 text-left">Budget</th>
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 text-left">Cost</th>
                            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 text-left">Modify Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows?.map((row: any) => {
                            return row;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}