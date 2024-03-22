//When NotificationAPI will be merged
import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
//import { GET} from "../../../app/api/notification/route";
import fetchMock from 'fetch-mock-jest';

jest.mock('@vercel/postgres', () => ({
  sql: jest.fn(),
}));

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

var Response: {
  new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response;
  prototype: Response;
  error(): Response;
  json(data: any, init?: ResponseInit | undefined): Response;
  redirect(url: string | URL, status?: number | undefined): Response;
}

describe('GET function', () => {
  let fetchConfigResponse: (new () => Response) | undefined;
  beforeEach(() => {
    fetchConfigResponse = fetchMock.config.Response;
    jest.useFakeTimers({ advanceTimers: true });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('it should return data on successful SQL query', async () => {
    // Mock SQL query result
    fetchMock.mock('../../app/api/messageBoard/', { method: 'GET' });
    const response = await fetch('../../app/api/messageBoard/');
    expect(response.status).toBe(200);
  });
});