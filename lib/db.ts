import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "./generated/prisma/client";

const adapter = new PrismaLibSql({
    url: process.env.DATABASE!
})

export const db = new PrismaClient({adapter})