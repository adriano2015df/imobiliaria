import { prisma } from "@/lib/prisma"

export const getProperties = async () => {
    try {
        const properties = await prisma.property.findMany();
        return properties;
    } catch (error) {
        throw new Error("Failed to fetch property data");
    }
}