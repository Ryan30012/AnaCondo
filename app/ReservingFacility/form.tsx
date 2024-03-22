import Reservation from "@/components/reserving-facility/Reservation";
import ReservationPics from "@/components/reserving-facility/ReservationPics";

interface Props {
  facilities: {
    fid: number;
    bid: number;
    count: number;
    name: string;
    location: string | null;
    accesscard: boolean | null;
    description: string | null;
  }[];
}

export default function ReserveFacilityPage({ facilities }: Props) {
  return (
    <>
      <div className="flex flex-col my-20 mx-20">
        <h1 className="font-bold text-3xl text-center">Reserve Facility</h1>
        <div className="reserve-commonarea mb-6">
          <h1 className="font-bold text-xl py-6 text-lime-700">
            Reserve a date and facility of your choice
          </h1>
          <Reservation facilities={facilities} />
          <hr></hr>
        </div>
        <div className="reserve-commonareaPics mb-6">
          <ReservationPics />
        </div>
      </div>
    </>
  );
}
