
"use client";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react";
import { createDocument } from "@/actions";
import type { Category } from "@prisma/client";
import FormBtn from "../common/loadingBtn";



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
                <DialogTrigger className="bg-[#7E60BF] p-2 rounded-md text-white hover:bg-violet-400">Upload a Document</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Upload a Document</DialogTitle>
                        <DialogDescription>Upload your Document to the CLOUD </DialogDescription>
                    </DialogHeader>
                    <div>
                        <form action={action} className="gap-4 w-full flex flex-col" >
                            <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            <div className="space-y-4 w-full">
                                <div>                                <Label htmlFor="picture">Upload Your Document</Label>
                                    <Input id="picture" type="file" name="file" className="input input-bordered w-full" /></div>
                                <div>
                                    <p>Select The Category</p>
                                    <select name="category" className="select w-full max-w-xs" defaultValue={""} >
                                        <option disabled  >Select your Category</option>
                                        {renderCategoryOptions}
                                    </select>
                                </div>
                                <FormBtn  >Upload</FormBtn>

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
