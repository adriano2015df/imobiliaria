"use client";

import { saveProperty } from "@/lib/actions"

const CreateForm = () => {
  return(
    <div>
        <form action={saveProperty}>
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nome do Proprietário</label>
                <input type="text"  id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5"/>
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Telefone:</label>
                <input type="text"  id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5"/>
            </div>
            <div className="mb-5">
                <label htmlFor="stateProperty" className="block text-sm font-medium text-gray-900">Estado do Imóvel</label>
                <input type="text"  id="stateProperty" name="stateProperty" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5"/>
            </div>
            <div className="mb-5">
                <label htmlFor="cityProperty" className="block text-sm font-medium text-gray-900">Cidade do Imóvel</label>
                <input type="text"  id="cityProperty" name="cityProperty" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5"/>
            </div>
            <div className="mb-5">
                <label htmlFor="area" className="block text-sm font-medium text-gray-900">Área do Imóvel</label>
                <input type="text"  id="area" name="area" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5"/>
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block text-sm font-medium text-gray-900">Descrição do Imóvel</label>
                <input type="text"  id="description" name="description" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5"/>
            </div>
            <div className="mb-5">
                <label htmlFor="price" className="block text-sm font-medium text-gray-900">Preço do Imóvel</label>
                <input type="text"  id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500
                 p-2.5"/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800
            font-medium rounded-sm text-sm w-full
            px-5 py-3 text-center">Salvar</button>
        </form>
    </div>
  )
}

export default CreateForm