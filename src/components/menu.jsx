import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { menuData } from "@/constants/menuSide";
import { Logo } from "@/assets/icons";

const Menu = () => {
    const location = useLocation();
    return (
        <div className='wrapper-menu'>
            <Link to='/'>
                <Logo />
            </Link>
            <div className='wrapper-menu_list'>
                {menuData.map(({ id, path, icon, label, visible }) => (
                    <NavLink key={id} to={path}>
                        <div
                            className={clsx(
                                "wrapper-menu_list__link",
                                location.pathname == path && "active",
                                visible && "hidden"
                            )}
                        >
                            {icon}
                            {label}
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Menu;
