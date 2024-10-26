import { MdVisibility, MdEdit, MdDelete } from "react-icons/md";
export default function DocsTable() {
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
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>2022-01-01</td>
                        <td className="flex gap-2">
                            {/* Icons for view, edit, and delete with colors */}
                            <a href="#" title="View" className="tooltip" data-tip="View">
                                <MdVisibility size={20} color="blue" />
                            </a>
                            <a href="#" title="Edit" className="tooltip" data-tip="Edit">
                                <MdEdit size={20} color="green" />
                            </a>
                            <a href="#" title="Delete" className="tooltip" data-tip="Delete">
                                <MdDelete size={20} color="red" />
                            </a>
                        </td>

                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>2022-01-01</td>
                        <td className="flex gap-2">
                            {/* Icons for view, edit, and delete with colors */}
                            <a href="#" title="View" className="tooltip" data-tip="View">
                                <MdVisibility size={20} color="blue" />
                            </a>
                            <a href="#" title="Edit" className="tooltip" data-tip="Edit">
                                <MdEdit size={20} color="green" />
                            </a>
                            <a href="#" title="Delete" className="tooltip" data-tip="Delete">
                                <MdDelete size={20} color="red" />
                            </a>
                        </td>

                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>2022-01-01</td>
                        <td className="flex gap-2">
                            {/* Icons for view, edit, and delete with colors */}
                            <a href="#" title="View" className="tooltip" data-tip="View">
                                <MdVisibility size={20} color="blue" />
                            </a>
                            <a href="#" title="Edit" className="tooltip" data-tip="Edit">
                                <MdEdit size={20} color="green" />
                            </a>
                            <a href="#" title="Delete" className="tooltip" data-tip="Delete">
                                <MdDelete size={20} color="red" />
                            </a>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}