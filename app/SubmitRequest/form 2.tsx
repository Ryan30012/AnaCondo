import Question from "@/components/submit-request/Question";
import RequestAccess from "@/components/submit-request/RequestAccess";
import ReportDeficiency from "@/components/submit-request/ReportDeficiency";
import ElevatorDate from "@/components/submit-request/ElevatorDate";
import ChangeIntercom from "@/components/submit-request/ChangeIntercom";
import Violation from "@/components/submit-request/Violation";

export default function SubmitRequestPage() {
  return (
    <>
      <div className="flex flex-col m-4 my-10 justify-center">
        <h1 className="font-bold text-3xl text-center">Submit Requests</h1>
        <div className="ask-question">
          <h1 className="font-bold text-xl py-6 text-lime-700">
            Ask a question
          </h1>
          <Question />
        </div>
        <hr></hr>
        <div className="reserve-elevator mb-6">
          <h1 className="font-bold text-xl py-6 text-lime-700">
            Reserve a date for the elevator
          </h1>
          <ElevatorDate />
        </div>
        <hr></hr>
        <div className="intercom-change mb-6">
          <h1 className="font-bold text-xl py-6 text-lime-700">
            Change your intercoms
          </h1>
          <ChangeIntercom />
        </div>
        <hr></hr>
        <div className="request-access mb-6">
          <h1 className="font-bold text-xl py-6 text-lime-700">
            Request access to the building
          </h1>
          <RequestAccess />
        </div>
        <hr></hr>
        <div className="report-violation">
          <h1 className="font-bold text-xl py-6 text-lime-700">
            Report a violation
          </h1>
          <Violation />
        </div>
        <hr></hr>
        <div className="report-deficiency mb-6">
          <h1 className="font-bold text-xl py-6 text-lime-700">
            Report a deficiency in a common area
          </h1>
          <ReportDeficiency />
        </div>
      </div>
    </>
  );
}
