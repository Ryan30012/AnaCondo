import Link from "next/link";
import Form from "./form";
import { getServerSession } from "next-auth";

export default async function AddCouponPage() {
  const session = await getServerSession();
  
  // Ensure the user is signed in as a Condo Management Company
  if (!session || session.accounttype !== "CONDO_COMPANY") {
    return (
      <div className="grid place-items-center h-screen">
        <div className="my-12 mx-10">
          <h1 className="font-bold text-3xl text-center">
            You are not signed in as a Condo Management Company
          </h1>
          <h1 className="text-center">Log in to view this page</h1>
        </div>
      </div>
    );
  }
  
  return (
    <div className="h-screen">
      <Form />
    </div>
  );
}
