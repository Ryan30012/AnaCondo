"use client";

import { FormEvent } from "react";
import Form from './form';
import EditCostsForm from "./editCosts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import React, { useState } from 'react';
import Link from "next/link";

interface UnitOperations {
    operationID: string;
    budget: string;
    cost: string;
    unitID: string;
    ownerID: string;
}

export default function OperationCosts(props: any) {
    const ownerID = props.ownderid;
    const condoUnits = props.condounits;
    const operations = props.operations;

    const [childState, setChildState] = useState<UnitOperations>();

    // HANDLE BUTTON CLICK WHEN WANTING TO EDIT THE ROW
    // const handleClick = (oid: any, budget: any, cost: any, cuid: any, ownerid: any): React.MouseEventHandler<HTMLButtonElement> => {      
    //     <Link href="/EditOperations" state={{operationID: oid, budget: budget, cost: cost, unitID: cuid, ownerID: ownerid}}></Link>
    // }

    // create rows containing each property's info
    const rows = [];
    for(let i = 0; i < condoUnits.length; i++){
        let temp = { operationID: operations[i].oid, 
                        budget: operations[i].budget, 
                        cost: operations[i].cost, 
                        unitID: condoUnits[i].cuid,
                        ownerID: operations[i].ownerid
        };
        setChildState(temp);

        /*let operationID = operations[i].oid, budget = operations[i].budget, cost = operations[i].cost, unitID= condoUnits[i].cuid, ownerID= operations[i].ownerid;
                <!--<button 
                    onClick={handleClick(operations[i].oid, operations[i].budget, operations[i].cost, condoUnits[i].cuid, operations[i].ownerid)}>
                        Modify
                </button>-->
        */
        const row = (
            <tr>
                <td className="border-b border-slate-100 p-4 pl-8">{condoUnits[i].cuid}</td>
                <td className="border-b border-slate-100 p-4 pl-8">{operations[i].budget}</td>
                <td className="border-b border-slate-100 p-4 pl-8">{operations[i].cost}</td>
                <Link 
                    className="bg-lime-600 hover:bg-black hover:font-semibold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    to={{pathname: "/EditOperations", state: {childState}}}>Modify</Link>
            </tr>
        );
        rows.push(row);
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
                    <tbody>{rows}</tbody>
                </table>
            </div>
        </div>
    );
}