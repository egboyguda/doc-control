"use client";

import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { MdVisibility } from "react-icons/md";

interface ViewModalProps {
    pdfUrl: string;
}
export default function ViewModal({ pdfUrl }: ViewModalProps) {
    return (
        <div>
            <Dialog>
                <DialogTrigger><MdVisibility size={20} color="blue" /> </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>PDF FILE</DialogTitle>
                    </DialogHeader>
                    <iframe src={pdfUrl} width="100%" height="800px"></iframe>

                </DialogContent>
            </Dialog>
        </div>
    )

}   
