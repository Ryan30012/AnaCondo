import { render, screen } from "@testing-library/react";
import CondoCompanyCouponAdd from "@/app/CondoCompany/Coupons/Add/form";

describe("CondoCompany", () => {
  it("should contain form'", () => {
    const { getByTestId } = render(<CondoCompanyCouponAdd />);
    const form = getByTestId("form");
    expect(form).toBeInTheDocument();
  });
  it("should contain form for property id", () => {
    const { getByTestId } = render(<CondoCompanyCouponAdd />);
    const propertyid = getByTestId("propertyid");
    expect(propertyid).toBeInTheDocument();
  });
  it("should contain form field for percentage", () => {
    const { getByTestId } = render(<CondoCompanyCouponAdd />);
    const discount_percentage = getByTestId("discount-percentage");
    expect(discount_percentage).toBeInTheDocument();
  });
  it("should contain form field for expiry date", () => {
    const { getByTestId } = render(<CondoCompanyCouponAdd />);
    const expiry_date = getByTestId("expiry-date");
    expect(expiry_date).toBeInTheDocument();
  });
  it("should contain save button", () => {
    const { getByTestId } = render(<CondoCompanyCouponAdd />);
    const save = getByTestId("save-btn");
    expect(save).toBeInTheDocument();
  });
});
