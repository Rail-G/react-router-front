import { useContext } from "react"
import { Context } from "../context/Context"
import { useNavigate } from "react-router-dom"

export function Profile() {
    const contextStates = useContext(Context)
    const user = JSON.parse(contextStates!.profile!)
    const navigate = useNavigate()
    const onClick = () => {
        contextStates!.setNewsList([])
        contextStates!.setProfile(null)
        contextStates!.setToken(null)
        localStorage.removeItem('profile')
        localStorage.removeItem('token')
        navigate('/task3')
    }
    return (
        <div className="profile">
            <h3>{`Hello ${user.name} !`}</h3>
            <img src="src/img/mafiosos57_m.png" alt="" />
            <button onClick={onClick} className="header-button logout">Logout</button>
        </div>
    )
}