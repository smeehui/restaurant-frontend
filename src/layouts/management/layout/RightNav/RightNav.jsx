import DropdownMenu from "~/components/fragments/dropdown-menu/DropdownMenu";
import { sidebarData } from "./sidebarData";
import { Link } from "react-router-dom";

import styles from "./RightNav.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonCustom from "~/components/fragments/button/Button";
import { useState } from "react";

function RightNav({showSideBar,handleShowSidebar}) {
    

    return (
        <div className={clsx(styles["wrapper"])}>
            <div
                className={clsx(styles["nav-body"], {
                    [styles.show]: showSideBar,
                    [styles.hide]: !showSideBar,
                })}
                onClick={handleShowSidebar}
            >
                <div className={clsx(styles["toggle"], "align-self-start")}>
                    <ButtonCustom
                        size={"btn-sm"}
                        icon={
                            showSideBar ? (
                                <FontAwesomeIcon icon={faTimes} />
                            ) : (
                                <FontAwesomeIcon icon={faBars} />
                            )
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default RightNav;
