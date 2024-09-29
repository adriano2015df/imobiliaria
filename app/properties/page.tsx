import { CreateButton } from "@/components/button"
import PropertyTable from "@/components/property-table"

const Properties = () => {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gag-1 mb-5">
            <CreateButton />    
            </div>
            <PropertyTable />
        </div>
    )
}

export default Properties