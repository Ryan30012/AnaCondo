import { render, screen } from "@testing-library/react";
import CondoOwnerDashboard from "@/app/CondoOwnerDashboard/form";

describe("RentalUserDashboard", () => {
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
  it("should have a '@user or email' heading for the user profile", () => {
    render(<CondoOwnerDashboard />);
    const elem = screen.getByRole("heading", {
      name: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    });
    expect(elem).toBeInTheDocument();
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
