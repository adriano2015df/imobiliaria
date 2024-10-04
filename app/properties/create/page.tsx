
import CreateForm from "@/components/create-form"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


 const  CreatePropertyPage = async () => {
   const session = await getServerSession();
   if(!session?.user) redirect("/")

    return (
        <div className="max-w-md mx-auto mt-5">
            
            <h1 className="text-2x1 text-center mb-2">Adicionar novo Imóvel</h1>
            <CreateForm />
            
        </div>
    )

}

export default CreatePropertyPage