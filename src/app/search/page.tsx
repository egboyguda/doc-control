import Search from "@/components/common/search";
import DocsTable from "@/components/documents/doc-table";
import { fetchDocsBySearch } from "@/db/queries/docs";
import { redirect } from "next/navigation";

interface SearchPageProps {
    searchParams: {
        term: string;

    }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { term } = await searchParams;
    if (!term) {
        redirect("/");
    }

    return (
        //dd an table components
        <div className="m-10 space-y-4">
            <h1>Documents</h1>

            <div className="w-1/4">
                <Search />
            </div>

            <DocsTable fetchData={() => fetchDocsBySearch(term)} />


        </div>
    )

}
