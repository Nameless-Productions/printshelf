"use server";

import { redirect } from "next/navigation";
import { db } from "../db";
import path from "path";
import fs from "fs/promises"
import { buffer } from "stream/consumers";

export default async function newPrintForm(formData: FormData) {
    const title = formData.get("title") as string | null
    const description = formData.get("description") as string | null
    const stl = formData.get("stl") as File | null
    const gcode = formData.get("gcode") as File | null
    const photos = formData.getAll("photos") as File[] | null
    const info = formData.get("info") as string | null

    if(
        !title ||
        !description ||
        !stl ||
        !gcode
    ) return redirect("/print?error=Not optional fields must be filled")

    const stlBuffer = Buffer.from(await stl.arrayBuffer())
    const gcodeBuffer = Buffer.from(await gcode.arrayBuffer())

    if(await db.prints.findUnique({where: {title: title}})) return redirect(`/print?error=Print with title ${title} already exists`);

    const printPath = path.join(process.cwd(), "files", title);
    await fs.mkdir(printPath, {recursive: true});
    const stlPath = path.join(printPath, "stl.stl");
    const gocdePath = path.join(printPath, "gcode.gcode");

    await fs.writeFile(stlPath, stlBuffer)
    await fs.writeFile(gocdePath, gcodeBuffer);

    let i = 0;
    for(const photo of photos!) {
        const buffer = Buffer.from(await photo.arrayBuffer())
        const picPath = path.join(printPath, "pictures", `${i}.${photo.name.split(".").pop()}`)
        await fs.mkdir(printPath, "pictures");
        await fs.writeFile(picPath, buffer)
        i++
    }

    await db.prints.create({
        data: {
            title: title,
            description: description,
            info: info
        }
    })
}