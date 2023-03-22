import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import styles from "./RightNav.module.scss";
import SubMenuItem from "./SubMenu/SubMenuItem";

function RightNavItem({ item }) {
    const { path, title, icon, subMenu } = item;
    const Icon = icon;

    const [isSubMenuExpand, setSubMenuExpand] = useState(false);

    const handleExpandSubMenu = () => {
        setSubMenuExpand(!isSubMenuExpand);
    };
    return (
        <Row>
            <div>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    to={path}
                    onClick={path === "#" && handleExpandSubMenu}
                >
                    <div
                        className={clsx(styles["nav-item"], {
                            [styles.sub]: !!subMenu,
                            [styles["spin-forward"]]: isSubMenuExpand,
                            [styles["spin-backward"]]: !isSubMenuExpand,
                        })}
                    >
                        {icon && (
                            <span className={styles["icon"]}>{<Icon />}</span>
                        )}
                        {title && <p className={styles["text"]}>{title}</p>}
                    </div>
                </NavLink>
                {subMenu && (
                    <div
                        className={clsx(styles["sub-menu"], {
                            [styles.expand]: isSubMenuExpand,
                            [styles.collapse]: !isSubMenuExpand,
                        })}
                    >
                        {subMenu.map((item, index) => (
                            <SubMenuItem key={index} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </Row>
    );
}

export default RightNavItem;
