
"use client";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Select from "../select";
import { useActionState } from "react";
import { createDocument } from "@/actions";
import type { Category } from "@prisma/client";



interface DocsModalProps {
    category: Category[];
}

export default function DocsModal({ category }: DocsModalProps) {
    const renderCategoryOptions = category.map((category) => {
        return (
            <option key={category.id} value={category.name}>{category.name}</option>
        )
    })
    const [formState, action] = useActionState(createDocument.bind(null), { errors: {} });
    return (
        <div>
            <Dialog>
                <DialogTrigger>Upload a Document</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Upload a Document</DialogTitle>
                        <DialogDescription>Upload your Document to the CLOUD </DialogDescription>
                    </DialogHeader>
                    <div>
                        <form action={action} >
                            <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="picture">Picture</Label>
                                <Input id="picture" type="file" name="file" />
                                <select name="category" className="select w-full max-w-xs" defaultValue={""} >
                                    <option disabled  >Pick your favorite Simpson</option>
                                    {renderCategoryOptions}
                                </select>
                                <button type="submit">Upload</button>

                            </div>
                            {formState.errors.name && <p className="text-red-500 text-sm">{formState.errors.name[0]}</p>}
                            {formState.errors._form && <p className="text-red-500 text-sm">{formState.errors._form[0]}</p>}
                            {formState.errors.category && <p className="text-red-500 text-sm">{formState.errors.category[0]}</p>}
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
