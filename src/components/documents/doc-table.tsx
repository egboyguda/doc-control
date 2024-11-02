import { db } from "@/db";
import { MdVisibility, MdEdit, MdDelete } from "react-icons/md";
import ViewModal from "./view-modal";
import { deleteDocs } from "@/actions";
import FormBtn from "../component/loadingBtn";
export default async function DocsTable() {
    const doc = await db.document.findMany({
        take: 5,
        orderBy: {
            date: "desc",
        },
        include: {
            category: true,
        },
    })

    const renderDoc = doc.map((doc, index) => {
        const delDoc = deleteDocs.bind(null, doc.id);
        return (
            <tr>
                <th>{index + 1}</th>
                <td>{doc.name}</td>
                <td>{doc.category.name}</td>
                <td>{ }</td>

                <td className="flex gap-2">
                    {/* Icons for view, edit, and delete with colors */}

                    <ViewModal pdfUrl={doc.url} />
                    <a href="#" title="Edit" className="tooltip" data-tip="Edit">
                        <MdEdit size={20} color="green" />
                    </a>
                    <form action={delDoc}>
                        <FormBtn ><MdDelete size={20} color="red" /></FormBtn>
                    </form>
                </td>

            </tr >
        )
    })
    return (

        <div className="overflow-x-auto p-2 col-span-2 space-y-1">
            <h1 className="font-bold">Recent Added Files </h1>
            <table className="table border rounded ">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Filename</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {renderDoc}
                </tbody>
            </table>
        </div>
    )
}