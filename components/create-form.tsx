"use client";

import { saveProperty } from "@/lib/actions"
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/buttons"
import BtnLogout from "./LogoutBtn";

 
const  CreateForm =  () => {
   
   const [state, formAction] = useFormState(saveProperty, null)
   
  return(
    <div>
        <form action={formAction}>
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nome do Proprietário</label>
                <input type="text"  id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5"/>
                 <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                 </div>
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Telefone:</label>
                <input type="text"  id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5" required/>
                 <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
                 </div>
            </div>
            <div className="mb-5">
                <label htmlFor="stateProperty" className="block text-sm font-medium text-gray-900">Estado do Imóvel</label>
                <input type="text"  id="stateProperty" name="stateProperty" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5"required/>
                 <div id="stateProperty-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.stateProperty}</p>
                 </div>
            </div>
            <div className="mb-5">
                <label htmlFor="cityProperty" className="block text-sm font-medium text-gray-900">Cidade do Imóvel</label>
                <input type="text"  id="cityProperty" name="cityProperty" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5" required />
                 <div id="cityProperty-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.cityProperty}</p>
                 </div>
            </div>
            <div className="mb-5">
                <label htmlFor="area" className="block text-sm font-medium text-gray-900">Área do Imóvel</label>
                <input type="text"  id="area" name="area" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5" required/>
                 <div id="area-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.area}</p>
                 </div>
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block text-sm font-medium text-gray-900">Descrição do Imóvel</label>
                <input type="text"  id="description" name="description" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5" required/>
                 <div id="description-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.description}</p>
                 </div>
            </div>
            <div className="mb-5">
                <label htmlFor="price" className="block text-sm font-medium text-gray-900">Preço do Imóvel</label>
                <input type="text"  id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5" required/>
                 <div id="price-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.price}</p>
                 </div>
            </div>
            <SubmitButton label="salvar" />
        </form>
        <div className="logout">
         <BtnLogout />
        </div>
    </div>
  )
}

export default CreateForm