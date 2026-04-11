"use server";

import path from "path";
import { db } from "../db";
import fs from "fs/promises"

export async function deletePrint(id: string) {
    const print = await db.prints.findUnique({
        where: {
            id: Number(id)
        }
    })

    if(!print) return

    await db.prints.delete({
        where: print
    })

    const printPath = path.join(process.cwd(), "files", print.title)

    await fs.rmdir(printPath, {recursive: true})
}