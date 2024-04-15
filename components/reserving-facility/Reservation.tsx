import { FormEvent } from "react";
import { useRouter } from "next/navigation";

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

export default function Reservation({ facilities }: Props) {
  const router = useRouter();
  const handleReservation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Attempting to reserve...");
    const reservationResponse = await fetch("/api/reserve-facility", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        day: formData.get("day"),
        month: formData.get("month"),
        year: formData.get("year"),
        startTime: formData.get("StartTime"),
        endTime: formData.get("EndTime"),
        facility: formData.get("facility"),
        message: formData.get("message"),
      }),
    });
    if (reservationResponse.ok) {
      console.log("Facility reservation successful.");
    }
    router.push("/");
  };

  return (
    <form onSubmit={handleReservation}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@email.com"
          required
        />
      </div>
      <div className="grid md:grid-cols-3">
        <div className="max-w-sm mb-4 mr-3">
          <label
            htmlFor="day"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Day
          </label>
          <select
            id="day"
            name="day"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          >
            <option value="01" selected>
              1
            </option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="20">30</option>
            <option value="31">31</option>
          </select>
        </div>
        <div className="max-w-sm mb-4 mx-3">
          <label
            htmlFor="month"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Month
          </label>
          <select
            id="month"
            name="month"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          >
            <option value="01" selected>
              January
            </option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="max-w-sm mb-4 ml-3">
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year
          </label>
          <select
            id="year"
            name="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          >
            <option selected>2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="max-w-sm mb-4">
          <label
            htmlFor="StartTime"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Start Time
          </label>
          <select
            id="StartTime"
            name="StartTime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          >
            <option value="8:00:00" selected>
              8:00
            </option>
            <option value="9:00:00">9:00</option>
            <option value="10:00:00">10:00</option>
            <option value="11:00:00">11:00</option>
            <option value="12:00:00">12:00</option>
            <option value="13:00:00">13:00</option>
            <option value="14:00:00">14:00</option>
            <option value="15:00:00">15:00</option>
            <option value="16:00:00">16:00</option>
            <option value="17:00:00">17:00</option>
            <option value="18:00:00">18:00</option>
            <option value="19:00:00">19:00</option>
            <option value="20:00:00">20:00</option>
            <option value="21:00:00">21:00</option>
            <option value="22:00:00">22:00</option>
          </select>
        </div>
        <div className="max-w-sm mb-4 ml-3">
          <label
            htmlFor="EndTime"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            End Time
          </label>
          <select
            id="EndTime"
            name="EndTime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          >
            <option value="8:00:00" selected>
              8:00
            </option>
            <option value="9:00:00">9:00</option>
            <option value="10:00:00">10:00</option>
            <option value="11:00:00">11:00</option>
            <option value="12:00:00">12:00</option>
            <option value="13:00:00">13:00</option>
            <option value="14:00:00">14:00</option>
            <option value="15:00:00">15:00</option>
            <option value="16:00:00">16:00</option>
            <option value="17:00:00">17:00</option>
            <option value="18:00:00">18:00</option>
            <option value="19:00:00">19:00</option>
            <option value="20:00:00">20:00</option>
            <option value="21:00:00">21:00</option>
            <option value="22:00:00">22:00</option>
            <option value="23:00:00">23:00</option>
          </select>
        </div>
      </div>
      <div className="max-w-sm mb-4">
        <label
          htmlFor="facility"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a Facility
        </label>
        <select
          id="facility"
          name="facility"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
        >
          <option selected>Choose a facility to reserve</option>
          {facilities.map((facility) => (
            <option key={facility.fid} value={facility.fid}>
              {facility.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="facilities"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Reservation Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add any extra information about your resevervation (if needed)"
        ></textarea>
        <div className="facility-submit-button mt-4">
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            type="submit"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Reserve Facility
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
