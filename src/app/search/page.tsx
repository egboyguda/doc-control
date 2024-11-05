
import Search from "@/components/common/search";
import DocsTable from "@/components/documents/doc-table";
import { fetchDocsBySearch } from "@/db/queries/docs";
import { redirect } from "next/navigation";
import { Suspense } from "react";


export default async function SearchPage(props: { searchParams: Promise<{ term: string }> }) {
    const searchParams = await props.searchParams;
    const term = searchParams.term;
    if (!term) {
        redirect("/");
    }

    return (
        //dd an table components
        <Suspense fallback={<div>Loading...</div>}>
            <div className="m-10 space-y-4">
                <h1>Documents</h1>

                <div className="w-1/4">
                    <Search />
                </div>

                <DocsTable fetchData={() => fetchDocsBySearch(term)} />


            </div>
        </Suspense>
    )

}
