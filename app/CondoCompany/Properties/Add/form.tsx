"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import type { PutBlobResult } from "@vercel/blob";

const Form = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const router = useRouter();
  var name = "";

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const fileInput = event.target.files;
    if (fileInput) {
      setImageFile(fileInput[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("File: " + imageFile);
    console.log("File name: " + imageFile?.name);

    // Storing image file in Vercel Blob Storage
    const blobRes = await fetch(`/api/file?filename=${imageFile?.name}`, {
      method: "POST",
      body: imageFile,
    });
    const newBlob = (await blobRes.json()) as PutBlobResult;
    const blobUrl = newBlob.url;
    console.log("blobUrl: " + blobUrl);

    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/addproperty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        unitCount: formData.get("unitCount"),
        parkingCount: formData.get("parkingCount"),
        lockerCount: formData.get("lockerCount"),
        address: formData.get("address"),
      }),
    });
    if (response.ok) {
      const res = await response.json();
      console.log("res: " + res);
      name = res;
    }
    console.log("name before exec: " + name);
    const storageResponse = await fetch(`/api/addproperty/addpropertyimage`, {
      method: "POST",
      body: JSON.stringify({
        blobUrl: blobUrl,
        name: name,
      }),
    });
    if (storageResponse.ok) {
      const data = await storageResponse.json();
      console.log(data);
      router.push("/CondoCompany/Properties");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Property Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="unitCount"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Unit Count
        </label>
        <input
          type="number"
          id="unitCount"
          name="unitCount"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="parkingCount"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Parking Count
        </label>
        <input
          type="number"
          id="parkingCount"
          name="parkingCount"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="lockerCount"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Locker Count
        </label>
        <input
          type="number"
          id="lockerCount"
          name="lockerCount"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="address"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="image"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Property Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleFileInputChange}
        />
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="w-full p-3 addBtn"
          style={{
            color: "white",
            borderRadius: "0.25rem",
          }}
        >
          Add Property
        </button>
      </div>
    </form>
  );
};

export default Form;
