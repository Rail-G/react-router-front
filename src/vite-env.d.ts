/// <reference types="vite/client" />
/* eslint @typescript-eslint/no-explicit-any: 0 */

interface Post {
    id: number;
    author: string,
    content: string,
    created: string,
    company: string,
    avatar: string,
}

interface Profile {
    id: string,
    login: string,
    name: string,
    avatar: string
}

interface ContextType {
    setNewsList: React.Dispatch<React.SetStateAction<NewsType[] | []>>,
    newsList: NewsType[]
    profile: string | null,
    setProfile: React.Dispatch<React.SetStateAction<string | null>>
    token: string | null,
    setToken: React.Dispatch<React.SetStateAction<string | null>>,
    isAuth: boolean,
    handleAuth: () => void
}

interface NewsType {
    id: string,
    title: string,
    image: string,
    content: string,
}

interface FormType {
    setProfile: React.Dispatch<React.SetStateAction<string | null>>
}

