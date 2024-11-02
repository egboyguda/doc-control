"use server";
import { db } from "@/db";
import cloudinary from "@/utils/cloudinary";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteDocs(id: string) {
  const doc = await db.document.delete({
    where: {
      id: id,
    },
  });
  try {
    await cloudinary.uploader.destroy(doc.public_id);
    console.log(doc.public_id);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/documents");
  redirect("/documents");
}
