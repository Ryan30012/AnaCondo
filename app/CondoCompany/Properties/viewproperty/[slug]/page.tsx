"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  useEffect(() => {
    fetch(`/api/getproperty?bid=${params.slug}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>BID: {params.slug}</div>;
}
