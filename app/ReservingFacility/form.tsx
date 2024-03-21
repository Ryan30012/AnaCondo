import Reservation from "@/components/reserving-facility/Reservation";
import ReservationPics from "@/components/reserving-facility/ReservationPics";

export default function ReserveFacilityPage(){
    return (
        <> <div className="flex flex-col my-20 mx-20">
            <h1 className="font-bold text-3xl text-center">Reserve Facility</h1>
            <div className="reserve-commonarea mb-6">
                <h1 className="font-bold text-xl py-6 text-lime-700">
                    Reserve a date and facility of your choice
                </h1>
                <Reservation/>
            </div>
            <hr></hr>
            <div className="reserve-commonareaPics mb-6">
                <ReservationPics/>
            </div>
            </div></>
        
        
    );
}