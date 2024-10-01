import { prisma } from "@/lib/prisma"

export const getProperties = async () => {
    try {
        const properties = await prisma.property.findMany();
        return properties;
    } catch (error) {
        throw new Error("Failed to fetch property data");
    }
}

export const getPropertyById = async (id: string) =>{
    try {
        const property = await prisma.property.findUnique({
            where: {id},
        });
        return property;
    } catch (error) {
        throw new Error("failed to fetch property data");
    }
};