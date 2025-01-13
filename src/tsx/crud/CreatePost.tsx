import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postPost } from "./serverRequest.tsx/requests";

export function CreatePost() {
    const [value, setValue] = useState<string>('')
    const navigate = useNavigate()
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await postPost(value).then(() => {
            setValue('')
            navigate('/task2')
        })
        
    }

    const onNavigate = () => {
        setValue('')
    }
    return (
        <form className="create-post" onSubmit={onSubmit}>
            <div className="create-header">
                <ul className="create-tools">
                    <li className="publicate">Публикация</li>
                    <li className="photo__video">Фото/Видео</li>
                    <li className="translation">Прямой эфир</li>
                    <li className="more">Еще</li>
                </ul>
                <nav>
                    <NavLink to='/task2' onClick={onNavigate} className="close-create"></NavLink>
                </nav>
            </div>
            <div className="crete-body">
                <img src="#" alt=""/>
                <textarea className="create-input" onChange={onChange} value={value} placeholder="Придумайте пост..."></textarea>
                <button type="button" className="emoji-btn"></button>
            </div>
            <div className="create-footer">
                <button type="submit" className="publicate-btn">Опубликовать</button>
            </div>
        </form>
    )
}