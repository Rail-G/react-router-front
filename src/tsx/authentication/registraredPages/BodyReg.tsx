import { useContext, useEffect } from "react";
import { NewsList } from "./NewsList";
import { getRequestWithToken } from "../utils/requests";
import { Context } from "../context/Context";

export function BodyReg() {
    const contextNews = useContext(Context)
    const token = contextNews!.token!
    const setNewsList = contextNews!.setNewsList
    useEffect(() => {
        const newsReguest = async () => {
            await getRequestWithToken(import.meta.env.VITE_PRIVATE_NEWS_URL, token).then(
                (resolve) => {
                    setNewsList(resolve)
                }
            )
        }
        if (token) {
            newsReguest()
        }
    }, [token, setNewsList])
    return (
        <div className="body">
            <NewsList newsList={contextNews!.newsList} />
        </div>
    )
}