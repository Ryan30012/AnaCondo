import { Client } from 'pg';
import { sql, QueryResult } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { Pool } from 'pg';
import fs from 'fs';

// Define type for environment variables
interface EnvVariables {
    [key: string]: string;
  }
  
  // Load environment variables from env.development.local
  const envPath = `${process.cwd()}/.env.development.local`;
  if (!fs.existsSync(envPath)) {
    throw new Error('env.development.local file not found');
  }
  const envFile = fs.readFileSync(envPath, 'utf-8');
  const envVariables: EnvVariables = envFile
    .split('\n')
    .filter(Boolean)
    .reduce((acc, line) => {
      const [key, value] = line.split('=');
      acc[key.trim()] = value.trim();
      return acc;
    }, {} as EnvVariables); // Initialize as empty object with type assertion
  
  // PostgreSQL credentials
  const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_DATABASE,
    POSTGRES_URL,
  } = envVariables;
  
  console.log(envVariables);

// Remove double quotes from environment variables
const postgresUser = POSTGRES_USER.replace(/"/g, '');
const postgresPassword = POSTGRES_PASSWORD.replace(/"/g, '');
const postgresHost = POSTGRES_HOST.replace(/"/g, '');
const postgresDatabase = POSTGRES_DATABASE.replace(/"/g, '');
const postgresUrl = POSTGRES_URL.replace(/"/g, '');

// Create a connection pool with sslmode=require
const pool = new Pool({
  user: postgresUser,
  password: postgresPassword,
  host: postgresHost,
  database: postgresDatabase,
  connectionString: `${postgresUrl}?sslmode=require`, // Add sslmode=require to the connection string
});

// Function to create "properties" table if it does not exist
async function createTable() {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS properties (
          id SERIAL PRIMARY KEY,
          property_name VARCHAR(255),
          address VARCHAR(255),
          balance VARCHAR(50),
          requests VARCHAR(50),
          image_url VARCHAR(255)
        );
      `);

      // Insert dummy data into the properties table
    await pool.query(`
    INSERT INTO properties (property_name, address, balance, requests, image_url)
    VALUES 
      ('Property 1', 'Address 1', '1000', '5', 'https://example.com/image1.jpg'),
      ('Property 2', 'Address 2', '2000', '10', 'https://example.com/image2.jpg'),
      ('Property 3', 'Address 3', '1500', '8', 'https://example.com/image3.jpg');
  `);


      console.log('Table created successfully');
    } catch (error) {
      console.error('Error creating table:', error);
    }
  }
  
  // Function to fetch property data from the database
  async function fetchData() {
    try {
      const result = await pool.query('SELECT * FROM properties');
      return NextResponse.json({ data: result.rows });
    } catch (error) {
      console.error('Error fetching properties:', error);
      return NextResponse.json({ error: 'Error fetching properties' }, { status: 500 });
    }
  }
  
  // Main function to handle GET request
  export async function GET(request: Request) {
    // Create "properties" table if it does not exist
    await createTable();
  
    // Fetch data from the "properties" table
    return fetchData();
  }