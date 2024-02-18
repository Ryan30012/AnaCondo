"use client";

import { ChangeEvent, ChangeEventHandler } from "react";

export default function AddPictureButton() {
  const uploadProfilePicture = () => {
    const fileInput = document.getElementById("profilePicFileInput");
    if (fileInput) fileInput.click();
    else console.log("File input corrupt.");
  };

  const attachProfilePicture = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("IN!");
    const fileInput = event.target.files;
    var fileName = "";
    var fileHandle = null;
    if (fileInput) {
      fileName = fileInput[0].name;
      console.log(fileName);
    }
  };

  return (
    <div className="flex profilePictureBtnCtn">
      <button
        className="flex flex-col justify-start align-middle profilePictureBtn"
        type="button"
        onClick={uploadProfilePicture}
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
