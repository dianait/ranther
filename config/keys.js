
export const COHERE = {
    endpoint: import.meta.env.VITE_COHERE_API_GENERATE_URL,
    api: import.meta.env.VITE_COHERE_API_KEY,
    prompt: import.meta.env.VITE_COHERE_PROMPT
}


export const OPENIA = {
    endpoint: import.meta.env.VITE_OPENIA_GENERATE_URL,
    api: import.meta.env.VITE_OPENIA_API_KEY,
    prompt: import.meta.env.VITE_OPENIA_PROMPT
}