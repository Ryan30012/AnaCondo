import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Image from "next/image";
import RentalPropertyCard from "@/components/renter-dashboard/RentalPropertyCard";
import RentalSubmittedRequests from "@/components/renter-dashboard/RentalSubmittedRequests";
import RentalFinancialStatus from "@/components/renter-dashboard/RentalFinancialStatus";
import img from "@/assets/profile-pic.png";
import { cookies } from "next/headers";

export default async function RentalUserDashboard() {
  return (
    <div className="flex flex-col my-20 mx-20">
      <div className="my-12 mx-10">
        <h1 className="font-bold text-3xl text-center">Renter Dashboard</h1>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <Image src={img} className="rounded-lg  w-40 " alt="img" />
        </div>
        <h1 className="font-semibold text-center">Name</h1>
        <h2 className="text-center">@user</h2>
        <h2 className="text-center">Email</h2>
        <h2 className="text-center">(514) 999-9999</h2>
      </div>
      <hr className="w-48 h-1 mx-auto mt-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="grid md:grid-cols-2 gap-3 my-12">
        <div>
          <h1 className="font-bold text-xl pb-6">Your Rental Properties</h1>
          <RentalPropertyCard />
        </div>
        <div className="ml-6 ">
          <h1 className="font-bold text-xl pb-6">Your Financial Status</h1>
          <RentalFinancialStatus />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl pr-10 pb-6">
          Your Submitted Requests
        </h1>
        <RentalSubmittedRequests />
      </div>
    </div>
  );
}
