import UpdateForm from "@/components/edit-form";
import { getPropertyById } from "@/lib/data";
import { notFound } from "next/navigation";


const UpdatePropertyPage = async ({ params}: { params: { id: string} }) => {
    const id= params.id;
    const property = await getPropertyById(id);

    if(!property) {
        notFound();
    }
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2x1 text-center">Edição de Imóvel</h1>
            <UpdateForm property={property} />
        </div>
    )
}

export default UpdatePropertyPage;