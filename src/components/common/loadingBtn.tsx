"use client";

import { useFormStatus } from "react-dom";

interface FormBtnProp {
    children: React.ReactNode;
}

export default function FormBtn({ children }: FormBtnProp) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={` text-white font-semibold rounded-lg 
                  ${pending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 px-4 py-2"}
                  flex items-center justify-center`}
        >
            {pending ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-50"></div>

            ) : (
                children
            )}
        </button>
    );
}
