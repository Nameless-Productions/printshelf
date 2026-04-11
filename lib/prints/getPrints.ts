"use server";

import { db } from "../db";

export async function getPrints() {
    return db.prints.findMany({
        orderBy: {
            id: "desc"
        }
    })
}