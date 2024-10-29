"use client";
import { createCategory } from "@/actions";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useActionState } from "react";

export default function Modal() {
    const [formState, action] = useActionState(createCategory.bind(null), { errors: {} });

    return (
        <div>
            <Dialog>
                <DialogTrigger>Make a Category</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add A Category</DialogTitle>

                        <DialogDescription>
                            Name the Category to your liking, this help you organize your files
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <form action={action}>
                            <input type="text" placeholder="Category Name" name="name" />
                            <button type="submit">Add</button>
                            {formState.errors._form && <p className="text-red-500 text-sm">{formState.errors._form[0]}</p>}
                            {formState.errors.name && <p className="text-red-500 text-sm">{formState.errors.name[0]}</p>}
                        </form>
                        {formState.success && <p className="text-green-500 text-sm">Category created successfully</p>}
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    );
}