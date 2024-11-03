import { db } from "@/db"

export default async function RecentTable() {
    //show only 5 recent added files
    // get the category id
    const recent = await db.document.findMany({
        take: 5,
        orderBy: {
            date: "desc",
        },
        include: {
            category: true,
        },
    })

    const renderRecent = recent.map((recent, index) => {
        return (
            <tr key={recent.id}>
                <th>{index + 1}</th>
                <td>{recent.name}</td>
                <td>{recent.category.name}</td>
            </tr>
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

                    </tr>
                </thead>
                <tbody>
                    {renderRecent}
                </tbody>
            </table>
        </div>
    )
}