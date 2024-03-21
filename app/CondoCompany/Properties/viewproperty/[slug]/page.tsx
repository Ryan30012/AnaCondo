"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";
import Link from "next/link";
import { PutBlobResult } from "@vercel/blob";

interface Property {
  bid: number;
  name: string;
  unitcount: number;
  parkingcount: number;
  lockercount: number;
  address: string;
  propertyfile: string;
  propertyimage: string;
}

export default function Page({ params }: { params: { slug: string } }) {
  const [property, setProperty] = useState<Property | null>(null);
  const [storedBlob, setstoredBlob] = useState(false);
  const [fileBlob, setFileBlob] = useState("");

  useEffect(() => {
    fetch(`/api/getproperty?bid=${params.slug}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProperty(data.property[0]);
        setFileBlob(data.property[0].propertyfile);
        console.log("property object: ", data.property[0]);
      });
  }, [storedBlob]);

  var blobUrl = "";

  const handleButtonClick = () => {
    console.log("Button clicked");
    const selected = document.getElementById("propertyFileInput");
    if (selected) {
      selected.click();
    }
  };

  const handleViewFileClick = () => {
    console.log("View file clicked");
    blobUrl = property?.propertyfile || fileBlob;
    console.log("blobUrl: " + blobUrl);
    window.open(blobUrl, "_blank");
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("File selected");
    const fileInput = event.target.files;
    if (fileInput) {
      const response = await fetch(`/api/file?filename=${fileInput[0]?.name}`, {
        method: "POST",
        body: fileInput[0],
      });
      const newBlob = (await response.json()) as PutBlobResult;
      blobUrl = newBlob.url;
      console.log("blobUrl: " + blobUrl);

      const storageResponse = await fetch(
        `/api/propertyfilestorage?bloburl=${blobUrl}&bid=${params.slug}`,
        {
          method: "POST",
        }
      );
      if (storageResponse.ok) {
        const data = await storageResponse.json();
        console.log("Data:", data);
        setstoredBlob(true);
      } else {
        console.log("Failed to insert URL into DB.");
      }
    }
  };

  return (
    <div
      className="flex flex-col w-full items-center mt-12 gap-4"
      style={{ height: "calc(100vh - 90px)", maxHeight: "calc(100vh - 90px)" }}
    >
      <p style={{ fontSize: "1.75rem" }}>
        <b>{property?.name}</b>
      </p>
      <div className="flex flex-col w-full items-center gap-6">
        {property !== null && (
          <div
            key={property.bid}
            className="p-4 flex flex-col w-1/3 item-center gap-2"
            style={{
              minWidth: "475px",
              boxShadow: "1px 1px 4px 2px #A2A2A2",
              borderRadius: "0.25rem",
            }}
          >
            <img
              className="propertyImage"
              src={property.propertyimage}
              alt={`Property ${property.bid}`}
              onLoad={() => {
                console.log(property.propertyimage);
              }}
            />
            <div className="text-left flex flex-col gap-2">
              <p className="font-semibold">{property.name}</p>
              <p>
                <span className="font-normal">Address:</span> {property.address}
              </p>
              <div className="flex w-full">
                <div className="flex w-full gap-2">
                  <div
                    className="globalBtn w-1/4 p-1 text-white text-center"
                    style={{ backgroundColor: "#000" }}
                  >
                    <span>Property {property.bid}</span>
                  </div>
                  <div className="w-1/6">
                    <Link href="Properties/Edit" as={`Properties/Edit`}>
                      <button
                        className="editBtn globalBtn w-full"
                        type="button"
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center w-1/3">
          {storedBlob || property?.propertyfile ? (
            <>
              <button
                className="biggerBtn w-fit"
                style={{ textDecoration: "underline" }}
                onClick={handleViewFileClick}
              >
                View Property File
              </button>
            </>
          ) : (
            <>
              <button
                className="biggerBtn w-fit"
                style={{ textDecoration: "underline" }}
                onClick={handleButtonClick}
              >
                Upload Property File
              </button>
              <input
                type="file"
                id="propertyFileInput"
                className="hidden"
                onChange={handleFileChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
