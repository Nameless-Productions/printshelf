"use server";

import { db } from "../db";

export async function editPrint(id: number, info: string, description: string) {
    const print = await db.prints.findUnique({
        where: {
            id
        }
    });

    if(!print) return;

    await db.prints.update({
        where: print,
        data: {
            description,
            info
        }
    })
}