import styles from "./RightNav.module.scss";
import clsx from "clsx";
import { memo } from "react";

function RightNav() {
    return (
        <div className={clsx(styles["wrapper"])}>
            <div className={clsx(styles["nav-body"])}></div>
        </div>
    );
}

export default memo(RightNav);
