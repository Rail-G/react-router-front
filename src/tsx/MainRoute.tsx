import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./authentication/provider/ContextProvider";
import { HelloDefPage } from "./authentication/defaultPages/HelloDefPage";
import { HelloRegPage } from "./authentication/registraredPages/HelloRegPage";
import { Protect } from "./authentication/hoc/Protect";
import { Layout } from "./crud/Layout";
import { MainPageSecond } from "./crud/MainPage";
import { postLoader, postsLoader } from "./crud/loader";
import { CreatePost } from "./crud/CreatePost";
import { PostView } from "./crud/PostView";
import { UpdatePost } from "./crud/UpdatePost";
import { HomePage } from "./menu/HomePage";
import { DriftPage } from "./menu/DriftPage";
import { TimeAttackPage } from "./menu/TimeAttackPage";
import { ForzaPage } from "./menu/ForzaPage";
import { MainM } from "./menu/MainPage";
import { HelloPage } from "./HelloPage";

export function MainRoute() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <>
            <Route path="/" element={<HelloPage/>}/>
            <Route path="/task2"  element={<Layout />}>
                <Route index element={<MainPageSecond />} loader={postsLoader}/>
                <Route path="/task2/posts/new" element={<CreatePost />}/>
                <Route path="/task2/posts/:id" element={<PostView/>} loader={postLoader}/>
                <Route path="/task2/posts/update/:id" element={<UpdatePost/>} loader={postLoader}/>
            </Route>
            <Route path="/task3" element={<HelloDefPage />}></Route>
                <Route path="/task3/news" element={<Protect><HelloRegPage/></Protect>}></Route>
            <Route path="*" element={<div style={{fontSize: '25px'}}>Ops...</div>}></Route>
            <Route path='/task1' element={<MainM/>}>
                <Route index element={<HomePage />} />
                <Route path="drift" element={<DriftPage />} />
                <Route path="timeattack" element={<TimeAttackPage />} />
                <Route path="forza" element={<ForzaPage />} />
            </Route>
            </>
        ),
        {
            basename: '/react-router-front'
        }
    )
    return (
        <ContextProvider>
            <RouterProvider router={routes}/>
        </ContextProvider>
    )
}