import { db } from "@/db"

export default async function Category() {
    const category = await db.category.findMany()
    const renderCategory = category.map((category, index) => {
        return (
            <tr>
                <th>{index + 1}</th>
                <td>{category.name}</td>
            </tr>
        )
    })
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
                    {renderCategory}
                </tbody>
            </table>
        </div>
    )
}