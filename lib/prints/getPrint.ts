"use server";

import path from "path";
import { db } from "../db";
import fs from "fs/promises"

export async function getPrint(id: number) {
    const print = await db.prints.findUnique({where: {id: Number(id)}})
    if(!print) return;
    const images = await fs.readdir(path.join(process.cwd(), "files", print.title, "pictures"));
    const imageUrls = images.map((i) => `/prints/${id}/images/${i}`)
    return {
        id: print.id,
        title: print.title,
        description: print.description,
        info: print.info,
        imageUrls
    }
}