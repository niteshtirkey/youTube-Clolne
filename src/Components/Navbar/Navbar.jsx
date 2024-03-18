import React from "react";
import "./Navbar.css";
import {
    jack,
    menu,
    more,
    notification,
    search,
    upload,
} from "../../assets/index";
import { logo } from "../../assets/index";
import { Link } from "react-router-dom";
const Navbar = ({ setSidebar }) => {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img
                    className="menu_icon"
                    onClick={() =>
                        setSidebar((prev) => (prev === false ? true : false))
                    }
                    src={menu}
                    alt=""
                />
                <Link to="/">
                    <img className="logo" src={logo} alt="" />
                </Link>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <img src={search} alt="" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={upload} alt="" />
                <img src={more} alt="" />
                <img src={notification} alt="" />
                <img src={jack} alt="" className="user_icon" />
            </div>
        </nav>
    );
};

export default Navbar;
