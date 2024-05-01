import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";
import Form from "../../../app/editProfile/form"; // Adjust the import path to where your Form component is located
import * as nextNavigation from "next/navigation";

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe.skip("Form", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
  });

  it("redirects upon successful form submission", async () => {
    // Mock fetch to simulate successful submission
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 200 });

    // Render the Form component with mock props
    render(
      <Form
        user={{
          username: "testuser",
          email: "test@example.com",
          phone: "1234567890",
        }}
      />
    );

    // Simulate form submission
    const form = screen.getByTestId("userForm");
    fireEvent.submit(form);

    await waitFor(() => {
      const input = screen.getByPlaceholderText("Enter your registration key");
      expect(input).toBeInTheDocument();
    });

    // Check if redirect was called with the correct URL
    expect(nextNavigation.redirect).toHaveBeenCalledWith("/userProfile");

    // Optionally, assert that fetch was called correctly
    expect(fetch).toHaveBeenCalledWith(
      "/api/submit",
      expect.objectContaining({
        method: "POST",
        body: expect.any(FormData), // Since FormData is used, it's hard to directly compare content
      })
    );
  });

  // Add more tests here to cover other scenarios, like form submission failure
});
