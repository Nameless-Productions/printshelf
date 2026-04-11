import { getPrint } from "@/lib/prints/getPrint";
import { existsSync } from "fs";
import fs from "fs/promises"
import mime from "mime";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(req: Request, {params}: {params: Promise<{id: number}>}) {
    const {id} = await params;
    const print = await getPrint(id);
    if(!print) return new NextResponse(null, {status: 404});

    const filePath = path.join(process.cwd(), "files", print.title, "stl.stl");
    if(!existsSync(filePath)) return new NextResponse(null, {status: 404});

    const file = await fs.readFile(filePath);
    const fileType = mime.getType(filePath);

    return new Response(file, {
        headers: {
            "Content-Type": fileType!,
            'Content-Disposition': `attachment; filename="stl.stl"`,
        }
    })
}