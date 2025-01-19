import { render, screen } from "@testing-library/react";
import CondoCompany from "@/app/CondoCompany/page";

describe("CondoCompany", () => {
  it("should contain button link to 'Property Information'", () => {
    const { getByTestId } = render(<CondoCompany />);
    const property_information_btn = getByTestId("property-information-btn");
    expect(property_information_btn).toBeInTheDocument();
  });
  it("should contain button link to 'Upload File'", () => {
    const { getByTestId } = render(<CondoCompany />);
    const upload_file_btn = getByTestId("upload-file-btn");
    expect(upload_file_btn).toBeInTheDocument();
  });
  it("should contain button link to 'Send Registration Key'", () => {
    const { getByTestId } = render(<CondoCompany />);
    const send_regkey_btn = getByTestId("send-regkey-btn");
    expect(send_regkey_btn).toBeInTheDocument();
  });
  it("should contain button link to 'Create Condo Discounts'", () => {
    const { getByTestId } = render(<CondoCompany />);
    const create_discounts_btn = getByTestId("create-discounts-btn");
    expect(create_discounts_btn).toBeInTheDocument();
  });
});
