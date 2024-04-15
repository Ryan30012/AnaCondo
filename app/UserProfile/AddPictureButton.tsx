"use client";

import { ChangeEvent } from "react";
import type { PutBlobResult } from "@vercel/blob";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @next/next/no-async-client-component
export default function AddPictureButton() {
  const router = useRouter();
  var blobUrl = "";

  // Open user File Browser
  const selectProfilePicture = () => {
    const fileInput = document.getElementById("profilePicFileInput");
    if (fileInput) {
      console.log("File selections showing...");
      fileInput.click();
    } else console.log("File input corrupt.");
  };

  // --- Event where User Selected Image
  const attachProfilePicture = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target.files;
    if (fileInput) {
      // --- Storing the file in Vercel Blob Storage
      const response = await fetch(`/api/file?filename=${fileInput[0]?.name}`, {
        method: "POST",
        body: fileInput[0],
      });
      const newBlob = (await response.json()) as PutBlobResult;
      blobUrl = newBlob.url;
      console.log("blobUrl: " + blobUrl);

      const storageResponse = await fetch(
        `/api/imagefilestorage?bloburl=${blobUrl}`,
        {
          method: "POST",
        }
      );
      if (storageResponse.ok) {
        const data = await storageResponse.json();
        console.log("retrievedUrl: " + data.blobUrl);
        router.push("/UserProfile");
        router.refresh();
      } else {
        console.log("Failed to insert URL into DB.");
      }
    }
  };

  return (
    <div className="flex profilePictureBtnCtn">
      <button
        className="flex flex-col justify-start align-middle profilePictureBtn"
        type="button"
        onClick={selectProfilePicture}
      >
        <div id="imageIconCtn">
          <div className="imageIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
          </div>
        </div>
        <input
          id="profilePicFileInput"
          type="file"
          className="hidden"
          onChange={attachProfilePicture}
        />
      </button>
    </div>
  );
}
