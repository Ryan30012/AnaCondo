
import "/styles/global.css";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Form from "./form";

export default async function employeeDashboard() {
  // -> Retrieving User Data from Postgres
  const session = await getServerSession();
  //await sql`CREATE TABLE IF NOT EXISTS Users (uid serial primary key, Fname varchar(255), Lname varchar(255), DOB DATE, Address varchar(255), Phone varchar(10), Email varchar(319), Password varchar(16), uType varchar(6), PRIMARY KEY (uid));`;
  //await sql`create table if not exists users(uid serial primary key, Fname varchar(255), Lname varchar(255),username varchar(255), DOB DATE, Address varchar(255), Phone varchar(10), Email varchar(319), Password varchar(255), regKey varchar(255));`;
  //await sql`INSERT INTO users (Fname, Lname, username, DOB, Address, Phone, Email, Password, regKey) VALUES ('Marinette', 'Dupain-Chang', 'ladybug', '2002-01-24', 'hell', '5145145144', 'mdupain@zag.com', 'miraculous', NULL);`;
  //await sql `UPDATE users SET accounttype = 'Employee' WHERE email = 'mdupain@zag.com';`;
  //await sql `CREATE TABLE if not exists EmployeeRole (uid, role VARCHAR(255));`;
  //await sql `INSERT INTO EmployeeRole (uid, role) VALUES (11, 'Repair Crew');`;
  /*const result = (
    await sql`SELECT * FROM users WHERE email = 'mdupain@zag.com';`
  ).rows;
  console.log(result);*/
  // If not logged in, redirect to signin
  if (!session?.user?.email) {
    redirect("/SignIn");
  }

  var email = "";
  if (session?.user?.email) email = session.user.email;
  console.log("Session Email: " + email);
  console.log("Fetching user data...");
  const res = await sql`SELECT * FROM users WHERE Email = ${email}`;
  const user = res.rows[0];
  const userType = user.accounttype;
  if (userType != "Employee") {
    return redirect("/");
  }
  const userProfilePictureUrl = user.pictureblob;
  const userFirstName = user.fname;
  const userLastName = user.lname;
  console.log(user.uid)
  console.log(user.username);
  //console.log(user.pictureblob);

  //await sql `CREATE TABLE IF NOT EXISTS Request (requestID serial primary key, employeeID integer, requesterID integer, managerID integer, description TEXT, dueDate DATE, FOREIGN KEY (employeeID) REFERENCES Users (uid), FOREIGN KEY (requesterID) REFERENCES Users (uid), FOREIGN KEY (managerID) REFERENCES Users (uid));`;
  //await sql `ALTER TABLE Request ADD COLUMN Status TEXT;`;
  //await sql `INSERT INTO Request (employeeID, requesterID, managerID, description, dueDate, status) VALUES (11, 1, 2, 'please save Paris', '2024-04-30', 'Open');`;
  const assignmentsTable = await sql `SELECT requestID, employeeID, requesterID, managerID, description, dueDate, status, (SELECT fname FROM Users U WHERE U.uid = requesterID) AS requesterFirstName,  (SELECT lname FROM Users U WHERE U.uid = requesterID) AS requesterLastName FROM Request WHERE employeeID = ${user.uid};`;
  ///console.log((assignmentsTable));
  const assignments = assignmentsTable.rows;
  /*console.log(assignments);
  console.log(JSON.stringify(assignments[0].requestID));
  console.log(assignments[0].employeeID);
  console.log(assignments[0].requesterID);
  console.log(assignments[0].managerID);
  console.log(assignments[0].status);
  console.log(assignments[0].description);
  console.log(JSON.stringify(assignments[0].duedate));
  console.log(JSON.stringify(assignments[0].requesterfirstname));
  console.log(assignments[0].requesterLastName);
  */

  return (
    <div className="w-full h-screen flex bg-lime-100">
      <div className="w-2/3 p-5">
        <h1 className="text-3xl">Requests</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Requested By
                </th>
                <th scope="col" className="px-6 py-3">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Complete
                </th>
              </tr>
            </thead>
            <tbody>
            {assignments.map((assignment) => (
                    <tr key={assignment.requestid} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">


                        <td className="w-4 p-4">
                        <div className="flex items-center">
                        <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                        >
                            checkbox
                        </label>
                        </div>
                    </td>
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {assignment.description}
                    </th>
                    <td className="px-6 py-4">{assignment.requesterfirstname} {assignment.requesterlastname}</td>
                    <td className="px-6 py-4">
                        { (JSON.stringify(assignment.duedate))}
                    </td>
                    <td className="px-6 py-4">
                        <Form assignmentID = {assignment.requestid}/>
                        {/* 
                        <form onSubmit={requestCompletion}>
                            <input type = "hidden" id = "requestid" name="requestid" value = {assignment.requestid}></input>
                            <button
                            type="submit"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                            Done
                            </button>
                        </form>
                        */}
                    </td>
                    </tr>
            ))}
            </tbody>
            </table>
        </div>
      </div>
      <div className="w-1/3 pr-5 pt-5">
        <h1 className="text-3xl">My Info</h1>
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src={userProfilePictureUrl}
                alt="Neil image"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {user.fname} {user.lname}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {email}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              Repair Crew
            </div>
          </div>
        </a>
        <h1 className="text-3xl pt-5">Messages</h1>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pb-3 sm:pb-4 hover:bg-gray-100">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-300 font-semibold text-gray-400 dark:text-white">
                  I broke up with...
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4  hover:bg-gray-100">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-300 font-semibold text-gray-400 dark:text-white">
                  I stubbed my toe...
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4  hover:bg-gray-100">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-300 font-semibold text-gray-400 dark:text-white">
                  Stepped on lego...
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4  hover:bg-gray-100">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Thomas Lean
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-300 font-semibold text-gray-400 dark:text-white">
                  Eating right now...
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4  hover:bg-gray-100">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Lana Byrd
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-300 font-semibold text-gray-400 dark:text-white">
                  Please finish it...
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//export default employeeDashboard;
