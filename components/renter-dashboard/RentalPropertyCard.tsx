import Image from "next/image";
import img from "@/assets/condopic.jpg";

export default function RentalPropertyCard() {
  const cardinfo = [
    {
      name: "Condominium Place",
      unitNb: "5B",
      address: "3000 Condo Street, QC",
      parkingSpotID: "99",
      lockerCount: "8",
      rent: "500$",
      registrationKey: "8979706",
    },
  ];

  return (
    <div className="rental-property items-center justify-center my-3">
      <div className=" bg-lime-300 rounded-lg p-5 grid md:grid-cols-3 gap-2">
        <div className="col-span-2">
          <Image src={img} className="rounded-lg" alt="img" />
        </div>
        <div className="px-4">
          {cardinfo.map((cardInfo, index) => (
            <>
              <h2 className="font-semibold">{cardInfo.name}</h2>
              <h2>{cardInfo.address}</h2>
              <h2>{cardInfo.unitNb}</h2>
              <h2>Parking Id: {cardInfo.parkingSpotID}</h2>
              <h2>Locker: {cardInfo.lockerCount}</h2>
              <h2>Registration key: {cardInfo.registrationKey}</h2>
              <h2 className="align-bottom">{cardInfo.rent}/month</h2>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
