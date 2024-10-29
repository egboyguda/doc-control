"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createCategorySchema = z.object({
  name: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Only alphabets, numbers, and spaces are allowed",
    }),
});

interface CreateCatagoryState {
  errors: {
    name?: string[];
    _form?: string[];
  };
  success?: boolean;
}

export async function createCategory(
  formState: CreateCatagoryState,
  formDate: FormData
): Promise<CreateCatagoryState> {
  {
    const result = createCategorySchema.safeParse({
      name: formDate.get("name"),
    });
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    try {
      await db.category.create({
        data: {
          name: result.data.name,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        return {
          errors: {
            _form: [err.message],
          },
        };
      } else {
        return {
          errors: {
            _form: ["Something went wrong"],
          },
        };
      }
    }
    revalidatePath("/dashboard");
    return {
      errors: {},
      success: true,
    };
  }
}
