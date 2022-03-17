export interface User {
    email: string;
    password: string;
    returnSecureToken?: boolean;
}

export interface FbAuthResponse {
    idToken: string;
    expiresIn: string;
}

export interface Post {
    name?: string,
    id?: string,
    title: string,
    author: string,
    text: string,
    date: Date
}

export interface FbCreateResponse { 
    name?: string
}