import { db } from "@/db"
import type { Category } from "@prisma/client"
interface CategoryProps {
    category: Category[];
}
export default async function Category({ category }: CategoryProps) {

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