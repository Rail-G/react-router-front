import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="crud-class">
            <header>
                <div className="header-logo">
                <a href="#">WorkChat</a>
                </div>
            </header>
            <main className="layout">
                <Outlet />
            </main>
            <footer>
                <div className="footer">
                    <div className="row">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                    </div>

                    <div className="row">
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>

                    <div className="row">
                        INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
                    </div>
                </div>
            </footer>
        </div>
    )
}