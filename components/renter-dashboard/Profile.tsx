import Image from "next/image";
import img from "@/assets/profile-pic.png";
import { useSession } from "next-auth/react";

export default function Profile() {
  return (
    <div className="dashboard-profile-info">
      <div className="flex justify-center items-center">
        <Image src={img} className="rounded-lg  w-40 " alt="img" />
      </div>
      <h1 className="font-semibold text-center">Name</h1>
      <h2 className="text-center">@user</h2>
      <h2 className="text-center">{session.user.email}</h2>
      <h2 className="text-center">(514) 999-9999</h2>
    </div>
  );
}
