// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { HomePage } from "./HomePage";
// import { DriftPage } from "./DriftPage";
// import { TimeAttackPage } from "./TimeAttackPage";
// import { ForzaPage } from "./ForzaPage";
import { Menu } from "./Menu";

import { Outlet } from "react-router-dom";

// export function MainPage() {
//     return (
//         <Router>
//             <div>
//             <Menu />
//             <div className="page">
//                 <Routes>
//                     <Route path="/task1" element={<HomePage />} />
//                     <Route path="/task1/drift" element={<DriftPage />} />
//                     <Route path="/task1/timeattack" element={<TimeAttackPage />} />
//                     <Route path="/task1/forza" element={<ForzaPage />} />
//                 </Routes>   
//             </div>
//             </div>
//         </Router>
//     )
// }

export function MainM() {
    return (
        <div>
            <Menu />
            <div className="page">
                <Outlet/> 
            </div>
        </div>
    )
}