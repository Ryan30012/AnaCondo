import { render, screen } from "@testing-library/react";
import CondoCompanyCoupon from "@/app/CondoCompany/Coupons/page";

describe("CondoCompany", () => {
  it("should contain coupon count'", () => {
    const { getByTestId } = render(<CondoCompanyCoupon />);
    const coupon_count = getByTestId("coupon-count");
    expect(coupon_count).toBeInTheDocument();
  });
  it("should contain button link to 'Add Coupon'", () => {
    const { getByTestId } = render(<CondoCompanyCoupon />);
    const add_coupon_btn = getByTestId("add-coupon-btn");
    expect(add_coupon_btn).toBeInTheDocument();
  });
  it("should contain coupon table", () => {
    const { getByTestId } = render(<CondoCompanyCoupon />);
    const coupon_table = getByTestId("coupon-table");
    expect(coupon_table).toBeInTheDocument();
  });
  it("should contain coupon table head", () => {
    const { getByTestId } = render(<CondoCompanyCoupon />);
    const coupon_table_head = getByTestId("coupon-table-head");
    expect(coupon_table_head).toBeInTheDocument();
  });
  it("should contain coupon table body", () => {
    const { getByTestId } = render(<CondoCompanyCoupon />);
    const coupon_table_body = getByTestId("coupon-table-body");
    expect(coupon_table_body).toBeInTheDocument();
  });
});
