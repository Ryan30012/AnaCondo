import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("hello");
  // Fetch user data
  const session = await getServerSession();
  var uid = "";
  const userID = (
    await sql`SELECT uid FROM users WHERE email=${session?.user?.email}`
  ).rows[0].uid;
  const companyid = (
    await sql`SELECT companyid FROM users WHERE email=${session?.user?.email}`
  ).rows[0].companyid;
  const data = await request.formData();

  // Retrieve formdata
  const propertyid = data.get("propertyid");
  const discountvalue = data.get("discountvalue");
  const expirydate = String(data.get("expirydate"));
  console.log(expirydate);

  // Send error response if propertyid or discountvalue are not numbers
  if (isNaN(propertyid) || isNaN(discountvalue))
    return NextResponse.json(
      { error: "Invalid Post Request" },
      { status: 500 }
    );

  // Handle coupon validation
  const isValidRPropertyID =
    (await sql`SELECT id FROM properties WHERE id=${propertyid}`).rowCount > 0;
  if (isValidRPropertyID) {
    const addcoupon =
      await sql`INSERT INTO companyCoupons (companyid, propertyid, discountvalue, expirydate) VALUES (${companyid}, ${propertyid},${discountvalue},${expirydate})`;
    const afterOperation =
      await sql`SELECT * FROM companyCoupons WHERE companyid=${companyid}`;
    console.log(afterOperation);
  } else {
    return NextResponse.json({ error: "Invalid Property ID" }, { status: 501 });
  }
  return NextResponse.json({ message: "success" });
}
