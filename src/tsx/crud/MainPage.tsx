import { Await, useLoaderData } from "react-router-dom";
import { InputBar } from "./InputBar";
import { PostList } from "./PostsList";
import { Suspense } from "react";
import { Load } from "./Load";

export function MainPageSecond() {
    const {data} = useLoaderData()
    return (
        <>
            <div className="container">
                <InputBar />
                <Suspense fallback={<Load />}>
                    <Await resolve={data}>
                        {(_data) => (
                            <PostList posts={_data}/>
                        )}
                    </Await>
                </Suspense>
                
            </div>
        </>
    )
}