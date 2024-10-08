import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Dropdown } from "antd";
import BigTitle from "./largeTitle";
import { Icons } from "@/assets/icons/icons";
import { UserContext } from "@/service/userContext";

const Header = () => {
    const [headerTitle, setHeaderTitle] = useState("");
    const location = useLocation();
    const { setUser } = useContext(UserContext);
    const items = [
        {
            key: "1",
            icon: <Icons.dropdownProfileIcon />,
            label: (
                <NavLink to='/profile'>
                    <span className='header-dropdown_label'>Profil</span>
                </NavLink>
            ),
        },
        {
            key: "2",
            icon: <Icons.logOutIcon />,
            label: (
                <button
                    className='danger-label'
                    onClick={() => {
                        localStorage.clear();
                        location.href = "/login";
                    }}
                >
                    Chiqish
                </button>
            ),
        },
    ];
    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setHeaderTitle("Bosh sahifa");
                break;
            case "/my-courses":
                setHeaderTitle("Mening kurslarim");
                break;
            case "/lesson-table":
                setHeaderTitle("Dars jadvali");
                break;
            case "/instuctors":
                setHeaderTitle("Instruktorlar");
                break;
            case "/profile":
                setHeaderTitle("Profil");
                break;
            case "/my-payments":
                setHeaderTitle("Mening to'lovlarim");
                break;
            case "/modules":
                setHeaderTitle("Testlar");
                break;
            case "/tests":
                setHeaderTitle("Testlar");
                break;
            case "/homework":
                setHeaderTitle("Uyga vazifalar");
                break;
            default:
                break;
        }
    }, [location.pathname]);

    return (
        <div className='wrapper-header'>
            <BigTitle text={headerTitle} />
            <div className='wrapper-header_actions'>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement='bottom'
                >
                    <Icons.profileImage />
                </Dropdown>
            </div>
        </div>
    );
};

export default Header;
