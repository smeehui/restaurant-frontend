import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./Submenu.module.scss";
import { Row } from "react-bootstrap";

function SubMenuItem({ item }) {
    const { path, title } = item;
    return (
        <Link to={path} className={clsx(styles["item-wrapper"])}>
            {title}
        </Link>
    );
}

export default SubMenuItem;
