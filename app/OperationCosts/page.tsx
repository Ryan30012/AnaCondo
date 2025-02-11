import { FormEvent } from "react";
import Form from './form';
import EditCostsForm from "./editCosts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import React, { useState } from 'react';
import OperationCosts from "./form";


export default async function OperationsTable(props: any) {
    const session = await getServerSession();

    // ENSURING CORRECT USER IS LOGGED IN
    // If not logged in, redirect to signin
    if (!session?.user?.email) redirect("/SignIn");

    // Retreive User type
    var email = "";
    if (session?.user?.email) email = session.user.email;
    const userInfo = await sql`SELECT * FROM users WHERE Email = ${email}`;
    const userType = userInfo.rows[0].accounttype;

    // Redirect if not condo owner
    if (userType != "CONDO_MANAGEMENT_COMPANY") redirect("/SignIn");

    // RETRIEVING DATA FROM DATABASE
    // Retrieve condo owner's user id for future retrieval
    const userQuery = await sql`SELECT * FROM users WHERE email = ${session.user.email}`;
    const ownerID = userQuery.rows[0].uid;

    // Retrieve condo units
    const condoUnitsQuery = await sql`SELECT * FROM condounits WHERE owner = ${ownerID}`;
    const condoUnits = condoUnitsQuery.rows;

    // Retrieve operations associated to condo units
    const operationsQuery = await sql`SELECT * FROM operations WHERE ownerid = ${ownerID}`;
    const operations = operationsQuery.rows;

    return <OperationCosts ownerid={ownerID} condounits={condoUnits} operations={operations} />;
}



/*
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
                    {userUnits?.map((unit: any) => {
                        return (
                            <RentalPropertyCard
                            key={unit.cuid}
                            unit={unit}
                            buildingInfo={unit.buildingInfo}
                            />
                        );
                    })}
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
*/