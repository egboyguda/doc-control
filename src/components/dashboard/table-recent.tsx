export default function RecentTable() {
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

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>

                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>

                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}