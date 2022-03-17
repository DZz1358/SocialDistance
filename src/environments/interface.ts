export interface Environment {
    apiKey: string,
    production: boolean
}

export interface Post {
    id?: string,
    title: string,
    author: string,
    text: string,
    date: Date
}