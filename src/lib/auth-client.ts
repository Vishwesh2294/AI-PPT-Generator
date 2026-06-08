import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
   
    baseURL:
        process.env.NODE_ENV === "production"
            ? "https://ai-ppt-generator-3zbf.onrender.com"
            : "http://localhost:3000",
})