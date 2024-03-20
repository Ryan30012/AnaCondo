// page.tsx
import React from "react";
import Form from "./form";

const AddPropertyPage: React.FC = () => {
  return (
    <div
      className="container mx-auto p-4 flex flex-col items-center justify-center"
      style={{ maxWidth: "60vw", height: "calc(100vh - 82px)" }}
    >
      <h1 className="text-2xl font-bold mb-4">Add New Property</h1>
      <Form />
    </div>
  );
};

export default AddPropertyPage;
