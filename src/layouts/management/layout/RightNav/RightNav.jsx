import clsx from "clsx";
import { memo } from "react";
import styles from "./RightNav.module.scss"; 

import { rightNavData } from "./rightNavData";
import RightNavItem from "./RightNavItem";

function RightNav() {
    return (
        <div className={clsx(styles["wrapper"])}>
            <div className={clsx(styles["nav-body"])}>
                {rightNavData.map((item, index) => (
                    <RightNavItem item={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default memo(RightNav);
