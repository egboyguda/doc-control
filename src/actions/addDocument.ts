"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import cloudinary from "@/utils/cloudinary";
import { redirect } from "next/navigation";
const createDocumentSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Only alphabets, numbers, and spaces are allowed",
    }),
  category: z.string(),
  //file as a file
  file: z.instanceof(File),
});

interface CreateDocumentState {
  errors: {
    name?: string[];

    category?: string[];
    _form?: string[];
  };
  success?: boolean;
}

export async function createDocument(
  formState: CreateDocumentState,
  formDate: FormData
): Promise<CreateDocumentState> {
  {
    const result = createDocumentSchema.safeParse({
      name: formDate.get("name"),
      file: formDate.get("file") as File,

      category: formDate.get("category"),
    });
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    const file = result.data.file;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    try {
      await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({}, async function (err, res) {
            if (err) {
              reject(err);
              return;
            } else {
              if (!res) {
                reject("No response from Cloudinary");
                return new Error("No response from Cloudinary");
              }
              console.log("to category find");
              const category = await db.category.findUnique({
                where: {
                  name: result.data.category,
                },
              });
              console.log("to category find", category);
              if (!category) {
                return new Error("Category not found");
              }
              const doc = await db.document.create({
                data: {
                  name: result.data.name,
                  url: res.secure_url,
                  public_id: res.public_id,
                  category: {
                    connect: { id: category.id },
                  },
                },
              });
              console.log("to document create", doc);
              if (!doc) {
                return new Error("Document not found");
              }
              console.log(res);
              resolve(res);
            }
          })
          .end(buffer);
      });
    } catch (error) {
      if (error instanceof Error) {
        return { errors: { _form: [error.message] } };
      }
      return { errors: { _form: ["Something went wrong"] } };
    }

    revalidatePath("/");
    redirect("/");
  }
}
