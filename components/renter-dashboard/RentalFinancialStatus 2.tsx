import Image from "next/image";
import img1 from "@/assets/user-salary.png";
import img2 from "@/assets/send-money.png";
import img3 from "@/assets/house-chimney-heart.png";


export default function RentalFinancialStatus(props: any) {
  const unit = props.unit;
  const buildingInfo = props.buildingInfo;

  const finances = [
    { currentBalance: "120", duePerMonth: "500", condoFee: unit.fee },
  ];
  return (
    <>
      {finances.map((finances, index) => (
        <div key={index} className="grid grid-rows-6 gap-4 my-3">
          <div className="border-2 row-span-2 rounded-lg flex p-3">
            <div className="pr-4 pt-2.5">
              <Image src={img1} className="w-7 rounded-lg" alt="img" />
            </div>
            <div>
              <h2 className="font-semibold">Current balance</h2>
              <h2>{finances.currentBalance}$</h2>
            </div>
          </div>
          <div className="border-2 row-span-2 rounded-lg p-3 flex">
            <div className="pr-4 pt-2.5">
              <Image src={img2} className="w-7 rounded-lg" alt="img" />
            </div>
            <div>
              <h2 className="font-semibold">Amount due per month</h2>
              <h2>{finances.duePerMonth}$</h2>
            </div>
          </div>
          <div className="border-2 row-span-2 rounded-lg p-3 flex">
            <div className="pr-4 pt-2.5">
              <Image src={img3} className="w-7 rounded-lg" alt="img" />
            </div>
            <div>
              <h2 className="font-semibold">Condo fee</h2>
              <h2>{finances.condoFee}$</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
