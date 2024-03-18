"use client";
import "/styles/global.css";
import {Monoton} from 'next/font/google';
import Image from 'next/image';

const monoton = Monoton({weight: "400", subsets: ['latin']});
const Dashboard = () => {
  return (
    <main className="bg-mintgreen h-screen bg-opacity-40 w-full">
      <h1 className={monoton.className}>
        <span className="text-8xl bg-gradient-to-br from-yellow-400 via-yellow-300 to-green-400 text-transparent inline-block bg-clip-text">AnaCondo</span>
      </h1>
      <div id="homepage-items" className="flex">
        <div id="building-left" className="relative basis-1/4">
        <Image src={`/building-left.png`}alt = "building image" fill={true} />
        </div>
      <div id="main-buttons" className="flex flex-col space-y-4 basis-1/2">
        <button className="bg-main-buttons border-b-4 border-button-shadow hover:bg-mintgreen text-black font-bold py-2 px-4 rounded">My Profile</button>
        <button className="bg-main-buttons border-b-4 border-button-shadow hover:bg-mintgreen text-black font-bold py-2 px-4 rounded">My Properties</button>
        <button className="bg-main-buttons border-b-4 border-button-shadow hover:bg-mintgreen text-black font-bold py-2 px-4 rounded">Notifications</button>
        <button className="bg-main-buttons border-b-4 border-button-shadow hover:bg-mintgreen text-black font-bold py-2 px-4 rounded">Communications</button>
        <button className="bg-main-buttons border-b-4 border-button-shadow hover:bg-mintgreen text-black font-bold py-2 px-4 rounded">Submit Requests</button>
        <button className="bg-main-buttons border-b-4 border-button-shadow hover:bg-mintgreen text-black font-bold py-2 px-4 rounded">Sign Out</button>
      </div>
      <div id="building-right" className="relative basis-1/4">
      <Image src={`/building-right.png`}alt = "building image" fill={true} />
      </div>
      </div>   
    </main>
  );
};

export default Dashboard;