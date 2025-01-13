import { NavLink } from "react-router-dom";

export function InputBar() {
    return (
        <div className="input-bar">
            <nav>
                <NavLink to='/task2/posts/new' className="input-btn">Создать пост</NavLink>
            </nav>
        </div>
    )
}