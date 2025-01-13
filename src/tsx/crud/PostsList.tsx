import { Post } from "./Post"

export function PostList({posts}: {posts: Post[]}) {
    return (
        <div className="post-list">
            {posts.length 
            ? <ul>
                {posts.map(el => (
                    <li key={el.id}><Post postData={el} /></li>
                ))}
            </ul>
            : <p className="empty-list">Нету постов</p>}
        </div>
    )

}