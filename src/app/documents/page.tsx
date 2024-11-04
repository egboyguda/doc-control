
import Search from "@/components/common/search";
import DocsTable from "@/components/documents/doc-table";
import { fetchDocs } from "@/db/queries/docs";

export default function DocumentPage() {
    return (
        <div className="m-10 space-y-4">
            <h1>Documents</h1>

            <div className="w-1/4">
                <Search />
            </div>

            <DocsTable fetchData={fetchDocs} />
        </div>
    );
}