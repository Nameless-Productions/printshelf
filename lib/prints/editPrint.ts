"use server";

import { redirect } from "next/navigation";
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

export async function editPrintForm(formData: FormData) {
    const id = formData.get("id");
    const description = formData.get("description");
    const info = formData.get("info");

    if(!id || !description || !info) return redirect(`/prints/${id}/edit?error=All fields are required`)

    await editPrint(Number(id), String(info), String(description))
}