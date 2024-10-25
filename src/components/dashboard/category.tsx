export default function Category() {
    return (
        <div className="overflow-x-auto space-y-1 p-2 ">
            <h1 className="font-bold">Category</h1>
            <table className="table border rounded ">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Category</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>

                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>

                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}