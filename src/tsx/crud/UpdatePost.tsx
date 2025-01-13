import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import React, { FormEvent, useState } from "react";
import { putPost } from "./serverRequest.tsx/requests";

export function UpdatePost() {
    const data = useLoaderData()
    const [value, setValue] = useState<string>(data.post.content)
    const navigate = useNavigate()
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await putPost(data.post.id, value).then(() => {
            setValue('')
            navigate('/task2')
        })
    }
    return (
        <form onSubmit={onSubmit} className="update-post">
            <div className="update-header">
                <div className="header-text">Редактировать публикацию</div>
                <nav>
                    <NavLink to='/task2'  className="close-create"></NavLink>
                </nav>
            </div>
            <div className="update-body">
                <img src={data.post.avatar} alt=""/>
                    <textarea className="update-input" value={value} onChange={onChange} placeholder="Придумайте пост..."></textarea>
                    <button type="button" className="emoji-btn"></button>
            </div>
            <div className="update-footer">
                <button type="submit" className="save-btn">Сохранить</button>
            </div>
        </form>
    )
}