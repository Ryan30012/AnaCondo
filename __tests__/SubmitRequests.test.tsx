import { render, screen } from "@testing-library/react";
import SubmitRequestPage from "@/app/SubmitRequest/form";

describe("CondoOwnerDashboard", () => {
  //test that the components exist on the page
  it("should contain component ChangeIntercom", () => {
    const { getByTestId } = render(<SubmitRequestPage />);
    const submitrequestcomponent = getByTestId("change-intercom");
    expect(submitrequestcomponent).toBeInTheDocument();
  });
  it("should contain component ElevatorDate", () => {
    const { getByTestId } = render(<SubmitRequestPage />);
    const submitrequestcomponent = getByTestId("elevator-date");
    expect(submitrequestcomponent).toBeInTheDocument();
  });
  it("should contain component Question", () => {
    const { getByTestId } = render(<SubmitRequestPage />);
    const submitrequestcomponent = getByTestId("question");
    expect(submitrequestcomponent).toBeInTheDocument();
  });
  it("should contain component ReportDeficiency", () => {
    const { getByTestId } = render(<SubmitRequestPage />);
    const submitrequestcomponent = getByTestId("report-deficiency");
    expect(submitrequestcomponent).toBeInTheDocument();
  });
  it("should contain component RequestAccess", () => {
    const { getByTestId } = render(<SubmitRequestPage />);
    const submitrequestcomponent = getByTestId("request-access");
    expect(submitrequestcomponent).toBeInTheDocument();
  });
  it("should contain component Violation", () => {
    const { getByTestId } = render(<SubmitRequestPage />);
    const submitrequestcomponent = getByTestId("violation");
    expect(submitrequestcomponent).toBeInTheDocument();
  });
});
