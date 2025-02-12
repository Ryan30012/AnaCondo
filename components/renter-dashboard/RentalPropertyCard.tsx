import Image from "next/image";
import img from "@/assets/condopic.jpg";

export default function RentalPropertyCard(props: any) {
  const unit = props.unit;
  const buildingInfo = props.buildingInfo;
  const cardinfo = [
    {
      name: buildingInfo.name,
      unitNb: unit.unitnumber,
      address: buildingInfo.address,
      parkingSpotID: buildingInfo.parkingcount,
      lockerCount: buildingInfo.lockercount,
      rent: unit.fee/10,
      registrationKey: "8979706",
    },
  ];
  // const cardinfo = [
  //   {
  //     name: 1,
  //     unitNb: 2,
  //     address:3,
  //     parkingSpotID: 4,
  //     lockerCount: 5,
  //     rent: 10,
  //     registrationKey: "8979706",
  //   },
  // ];

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
              <h2 className="align-bottom">Rent: $ {cardInfo.rent}/month</h2>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
