// import { POST } from '../../app/api/submit/route'; // Replace 'your-api-module' with the actual path to your module
// import { NextRequest, NextResponse } from "next/server";
// import { sql } from "@vercel/postgres";
// global.FormData = require('form-data');

// jest.mock("@vercel/postgres", () => ({
//   sql: jest.fn(),
// }));



// describe("Registration Key Route", () => {
//   FormData = jest.fn()
//   beforeEach(() => {
//     // Clear all mock calls
//     (sql as jest.MockedFunction<typeof sql>).mockClear();
//     (mockNextResponse.json as jest.Mock).mockClear();
//     (fetch as jest.Mock).mockClear();
//   });

//     const mockRequest = new Request("http://localhost/api/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userID: 16,
//         regKey: "12345",
//       }),
//     });

//    const mockNextResponse = {
//       json: jest.fn(),
//     } as unknown as NextResponse<any>;

//   const mockNextRequest = {
//     nextResponse: mockNextResponse,
//     ...mockRequest,
//   } as unknown as NextRequest;


//   test("it should call the appropriate SQL queries and return the correct HTTP status", async () => {
//     await POST(mockNextRequest);
    
//     // Check if req.json was called
//     expect(mockNextRequest.json).toHaveBeenCalled();

//     // Check if the SQL queries were executed correctly
//     expect(sql).toHaveBeenCalledTimes(2); // Assuming two SQL queries were executed
//     expect(sql).toHaveBeenCalledWith(expect.stringContaining('CSELECT uid FROM users WHERE '));
//     expect(sql).toHaveBeenCalledWith(expect.stringContaining('SELECT regKey FROM RegKeys WHERE '));

//     // Check if NextResponse.json was called with status 200
//     expect(mockNextResponse.json).toHaveBeenCalledWith({ status: 200 });

//     // You may need to add more assertions depending on your specific test case
//   });
// });
