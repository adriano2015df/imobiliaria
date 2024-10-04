"use client"

import { signIn } from "next-auth/react"

export function LoginBtn(){
    return (
    <button onClick={() => signIn("google", { callbackUrl: "/properties/create"})}>Login com Google</button>
    )
}