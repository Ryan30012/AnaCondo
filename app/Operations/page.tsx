import { getServerSession } from "next-auth";
import OperationsPage from "./form";
import React from "react";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";