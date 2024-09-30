import { getProperties } from "@/lib/data"

const PropertyTable = async () => {
    const properties = await getProperties();
    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Proprietário</th>
                    <th className="py-3 px-6">Telefone</th>
                    <th className="py-3 px-6">Estado do Imóvel</th>
                    <th className="py-3 px-6">Cidade do Imóvel</th>
                    <th className="py-3 px-6">KM²</th>
                    <th className="py-3 px-6">Descrição</th>                    
                    <th className="py-3 px-6">Preço</th>
                </tr>
            </thead>
            <tbody>
                {properties.map((property, index) =>(
                    <tr key={property.id}>
                    <td className="py-3 px-6">{index +1}</td>
                    <td className="py-3 px-6">{property.name}</td>
                    <td className="py-3 px-6">{property.phone}</td>
                    <td className="py-3 px-6">{property.stateProperty}</td>
                    <td className="py-3 px-6">{property.cityProperty}</td>
                    <td className="py-3 px-6">{property.area}</td>
                    <td className="py-3 px-6">{property.description}</td>
                    <td className="py-3 px-6">{property.price}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    )
}

export default PropertyTable