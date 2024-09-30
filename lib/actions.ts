"use server";

import {z} from "zod"
import {prisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const PropertySchema = z.object({
    name: z.string().min(4),
    phone: z.string().min(10),
  stateProperty: z.string().min(2),
  cityProperty: z.string().min(2),
  area: z.string().min(3),
  description: z.string(),
  price: z.string().min(2)
})

export const saveProperty = async (prevSate:any, formData: FormData) => {
    const validateFields = PropertySchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validateFields.success){
        return {
        Error: validateFields.error?.flatten().fieldErrors,
        }
    }
    try {
        await prisma.property.create({
           data:{
            name: validateFields.data.name,
            phone: validateFields.data.phone,
            stateProperty: validateFields.data.stateProperty,
            cityProperty: validateFields.data.cityProperty,
            area: validateFields.data.area,
            description: validateFields.data.description,
            price: validateFields.data.price 
           }
           
        })
    } catch (error) {
        return {mesage: "Failed to create Property"}
    }

    revalidatePath("/properties");
    redirect("/properties");
};