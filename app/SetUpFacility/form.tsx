import NewFacility from "@/components/setUp-facility/NewFacility";
import NewFacilityPics from "@/components/setUp-facility/NewFacilityPics";

interface Props {
  bid: number;
}

export default function SetUpFacilityPage({ bid }: Props) {
  return (
    <>
      <div className="flex flex-col my-20 mx-20">
        <h1 className="font-bold text-3xl text-center">
          Set Up a Common Facility
        </h1>
        <div className="reserve-commonarea mb-6">
          <h1 className="font-bold text-xl py-6 text-lime-700">
            Set Up a new facility of your choice
          </h1>
          <NewFacility bid={bid} />
          <hr></hr>
        </div>

        <div className="reserve-commonareaPics mb-6">
          <NewFacilityPics />
        </div>
      </div>
    </>
  );
}
