"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Image from "next/image";

import RentalPropertyCard from "@/components/renter-dashboard/RentalPropertyCard";
import RentalSubmittedRequests from "@/components/renter-dashboard/RentalSubmittedRequests";
import RentalFinancialStatus from "@/components/renter-dashboard/RentalFinancialStatus";
import AddPictureButton from "../UserProfile/AddPictureButton";

import img from "@/assets/profile-pic.png";
import { cookies } from "next/headers";
import PropertyList from "../CondoCompany/Properties/page";

var type = "";

const breadcrumbItems = [
    { text: "Property Operations", url: "/Operations" },
  ];

export default function Operations(propa: any){
    const { data: session, status } = useSession();

    var accountType = "";
    useEffect(() => {
        accountType = session.user?.name || "";
        switch (accountType) {
          case "CONDO_OWNER":
            type = "Condo Owner";
            break;
          case "RENTAL_USER":
            type = "Renter";
            break;
          case "PUBLIC_USER":
            type = "Public User";
            break;
          default:
            type = "Error";
            break;
        }
    })

    return(
        <>
            <Breadcrumb items={breadcrumbItems} />
            
        </>
    )

}