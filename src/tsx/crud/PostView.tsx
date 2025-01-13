import { NavLink, useLoaderData, useNavigate } from "react-router-dom"
import { deletePost } from "./serverRequest.tsx/requests"

export function PostView() {
    const data = useLoaderData()
    const navigate = useNavigate()
    const onUpdate = () => {
        navigate(`/task2/posts/update/${data.post.id}`)
    }
    const onDelete = async (id: number) => {
        await deletePost(id).then(() => navigate('/task2'))
    }
    const onNavigate = () => {
        navigate('/task2')
    }
    return (
        <div className="post">
            <nav>
                <NavLink to='/task2' onClick={onNavigate} className="close-create"></NavLink>
            </nav>
            <div className="post-header">
                <img className="header-img" src={data.post.avatar} alt=""/>
                    <div className="user-info">
                        <h3 className="user-name">{data.post.author}</h3>
                        <div className="user-desc">
                            <span className="user-post">{data.post.company}</span>
                            <span className="post-created">{data.post.created}</span>
                        </div>
                    </div>
            </div>
            <div className="post-body">
                <div className="body-content">
                    <p>{data.post.content}</p>
                </div>
                <div className="post-tools">
                    <button className="post-btn like">Нравиться</button>
                    <button className="post-btn comment">Комментировать</button>
                </div>
            </div>
            <div className="post-footer view">
                <button className="post-footer-btn change-post" onClick={onUpdate}>Изменить</button>
                <button className="post-footer-btn delete-post" onClick={() => onDelete(data.post.id)}>Удалить</button>
            </div>
        </div>
    )
}