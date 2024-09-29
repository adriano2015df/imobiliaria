"use server";

export const saveProperty = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);
};