import { render, screen } from "@testing-library/react";
import CondoOwnerDashboard from "@/app/CondoOwnerDashboard/form";

describe("CondoOwnerDashboard", () => {
  //test the user profile
  it('should contain the text "Dashboard"', () => {
    render(<CondoOwnerDashboard />);
    const elem = screen.getByText(/Dashboard/i);
    expect(elem).toBeInTheDocument();
  });
  it("should have a 'Name' heading for the user profile", () => {
    render(<CondoOwnerDashboard />);
    const elem = screen.getByRole("heading", {
      name: "Name",
    });
    expect(elem).toBeInTheDocument();
  });
  it("should have a '@user' heading for the user profile", () => {
    render(<CondoOwnerDashboard />);
    const elem = screen.getByRole("heading", {
      name: "@user",
    });
    expect(elem).toBeInTheDocument();
  });
  it("should have a 'Email' heading for the user profile", () => {
    render(<CondoOwnerDashboard />);
    const elem = screen.getByRole("heading", {
      name: "email",
    });
    expect(elem).toBeInTheDocument();
  });

  //test the shortcut links
  it("should contain button link to 'Submit Request'", () => {
    const { getByTestId } = render(<CondoOwnerDashboard />);
    const rentalUserPropertyComponent = getByTestId("submit-requests");
    expect(rentalUserPropertyComponent).toBeInTheDocument();
  });
  it("should contain button link to 'Reservations'", () => {
    const { getByTestId } = render(<CondoOwnerDashboard />);
    const rentalUserPropertyComponent = getByTestId("reservations");
    expect(rentalUserPropertyComponent).toBeInTheDocument();
  });
  it("should contain button link to 'Notifications'", () => {
    const { getByTestId } = render(<CondoOwnerDashboard />);
    const rentalUserPropertyComponent = getByTestId("notifications");
    expect(rentalUserPropertyComponent).toBeInTheDocument();
  });
  it("should contain button link to 'Message Board'", () => {
    const { getByTestId } = render(<CondoOwnerDashboard />);
    const rentalUserPropertyComponent = getByTestId("message-board");
    expect(rentalUserPropertyComponent).toBeInTheDocument();
  });

  //test that the components exist on the page
  it("should contain component RentalPropertyCard", () => {
    const { getByTestId } = render(<CondoOwnerDashboard />);
    const rentalUserPropertyComponent = getByTestId("rental-user-property");
    expect(rentalUserPropertyComponent).toBeInTheDocument();
  });
  it("should contain component RentalSubmittedRequests", () => {
    const { getByTestId } = render(<CondoOwnerDashboard />);
    const rentalUserPropertyComponent = getByTestId(
      "rental-user-submitted-requests"
    );
    expect(rentalUserPropertyComponent).toBeInTheDocument();
  });
  it("should contain component RentalFinancialStatus", () => {
    const { getByTestId } = render(<CondoOwnerDashboard />);
    const rentalUserPropertyComponent = getByTestId("rental-user-financial");
    expect(rentalUserPropertyComponent).toBeInTheDocument();
  });
});
