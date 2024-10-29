import { db } from "@/db"


export default async function Select() {
    const category = await db.category.findMany()
    const renderCategoryOptions = category.map((category) => {
        return (
            <option>{category.name}</option>
        )
    })
    return (
        <div>

            <select className="select w-full max-w-xs">
                <option disabled defaultValue={""} >Pick your favorite Simpson</option>
                {renderCategoryOptions}
            </select>

        </div>
    )
}