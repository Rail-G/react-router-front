import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { getPosts } from "../serverRequest.tsx/requests";

export async function postsLoader(): Promise<{data: Promise<Post[] | []>}> {
    const result = getPosts()
    return {
        data: result
    }
}

export async function postLoader ({ params }: LoaderFunctionArgs): Promise<LoaderFunction> {
    const { id } = params;
    const res = await fetch(`http://localhost:7070/posts/${id}`);
    const post = await res.json();
    return post;
};