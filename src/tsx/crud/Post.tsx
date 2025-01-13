import { NavLink } from "react-router-dom"
import IMAGES from "../../img/images"

export function Post({postData} : {postData: Post}): JSX.Element {
    const date = new Date(postData.created)
    return (
        <div className="post">
            <div className="post-header">
                <img className="header-img" src={postData.avatar} alt=""/>
                <div className="user-info">
                    <h3 className="user-name">{postData.author}</h3>
                    <div className="user-desc">
                        <span className="user-post">{postData.company}</span>
                        <span className="post-created">{`${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
                    </div>
                </div>
            </div>  
            <div className="post-body">
                <NavLink to={`/task2/posts/${postData.id}`} className='post-navLink'>
                    <div className="body-content">
                        <p className="content-text">{postData.content}</p>
                    </div>
                </NavLink>
                <div className="post-tools">
                    <button className="post-btn like">Нравиться</button>
                    <button className="post-btn comment">Комментировать</button>
                </div>
            </div>
            <div className="post-footer">
                <img className="footer-img" src={`${IMAGES.mafia}`} alt="" />
                <div className="input-comment">
                    <input type="text" placeholder="Напишите комментарий..." />
                    <div className="te emoji"></div>
                    <div className="te screen"></div>
                    <div className="te gif"></div>
                    <div className="te sticker"></div>
                </div>
            </div>
        </div>
    )
}