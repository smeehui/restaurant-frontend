import clsx from "clsx";
import React from "react";
import { BreadcrumbItem, Nav, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";

function Breadcrumb() {
    const location = useLocation();
    const paths = location.pathname.split("/");
    paths.shift()
    let to = "";
    return (
        <Nav>
            {paths.map((path, index) => {
                to += "/" + path;
                return (
                    <NavLink
                        end
                        to={to}
                        className={({ isActive }) => {
                            return clsx(styles.item,{
                                [styles.active]: isActive,
                            });
                        }}
                        key={path}
                    >
                        {path}
                    </NavLink>
                );
            })}
        </Nav>
    );
}

export default Breadcrumb;
