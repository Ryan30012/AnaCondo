// Importing necessary utilities and the function to be tested
import { POST } from "../app/api/set-condo-unit-cost/route";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// Jest mock functions for NextResponse.json and sql
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

jest.mock("@vercel/postgres", () => ({
  sql: jest.fn(),
}));

beforeAll(() => {
  process.env.POSTGRES_URL = "your_postgres_connection_string";
});

afterAll(() => {
  delete process.env.POSTGRES_URL;
});

beforeEach(() => {
  // Clear mocks before each test
  jest.clearAllMocks();
  // Mocking sql to return success responses for the queries
  sql.mockResolvedValueOnce({ rows: [{ id: 1 }] }); // Mock successful SELECT query response
  sql.mockResolvedValueOnce({}); // Mock successful INSERT/UPDATE query response
});

describe("POST request handler tests", () => {
  it("should return a success message when given correct inputs", async () => {
    // Mocking request data
    const request = {
      json: jest.fn().mockResolvedValue({
        bid: 1,
        cuid: 1,
        condoFee: 300,
        pid: 1,
        parkingFee: 50,
      }),
    };

    // Mocking NextResponse.json to simulate response behavior
    const mockJson = jest.fn();
    NextResponse.json = mockJson;

    // Running the POST function with the mock request
    await POST(request);

    // Asserting that the response is as expected
    expect(mockJson).toHaveBeenCalledWith(
      { message: "Successfully set condo unit cost." },
      { status: 200 }
    );
  });
});
