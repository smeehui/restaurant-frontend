import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { memo } from "react";
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

import styles from "./RightNav.module.scss";
import { rightNavData } from "./rightNavData";

function RightNav({ className }) {
    return (
        <div className={clsx(styles["wrapper"], className)}>
            <div className={clsx(styles["nav-body"])}>
                <Sidebar>
                    <Menu
                        renderExpandIcon={({ open }) => (
                            <FontAwesomeIcon
                                icon={faAngleUp}
                                className={clsx({
                                    [styles.expand]: open,
                                    [styles.collapse]: !open,
                                })}
                            />
                        )}
                    >
                        {rightNavData.map((item, index) => {
                            const Icon = item.icon;
                            if (item.subMenu)
                                return (
                                    <SubMenu
                                        key={index}
                                        icon={<Icon />}
                                        label={item.title}
                                    >
                                        {item.subMenu.map((sub, index) => (
                                            <MenuItem
                                                component={
                                                    <Link to={sub.path} />
                                                }
                                                key={index}
                                            >
                                                {sub.title}
                                            </MenuItem>
                                        ))}
                                    </SubMenu>
                                );
                            return (
                                <MenuItem
                                    component={<Link to={item.path} />}
                                    key={index}
                                    icon={<Icon />}
                                >
                                    {item.title}
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </Sidebar>
            </div>
        </div>
    );
}

export default memo(RightNav);
