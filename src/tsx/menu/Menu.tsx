import { NavLink, NavLinkRenderProps } from "react-router-dom";

export function Menu() {
    const menuItemClass = ({isActive}: NavLinkRenderProps): string => isActive ? 'menu__item menu__item-active' : 'menu__item';
    return (
        <nav className="menu">
            <NavLink to={"/task1"} className={menuItemClass}>Главная</NavLink>
            <NavLink to={"/task1/drift"} className={menuItemClass}>Дрифт-такси</NavLink>
            <NavLink to={"/task1/timeattack"} className={menuItemClass}>Time Attack</NavLink>
            <NavLink to={"/task1/forza"} className={menuItemClass}>Forza Karting</NavLink>
        </nav>
    )
}