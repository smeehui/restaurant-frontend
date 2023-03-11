import clsx from "clsx";
import { Container } from "react-bootstrap";
import styles from "./Header.module.scss";

function Navigation() {
    return (
        <div className={clsx(styles["header-nav"])}>
            <h3>Nav</h3>
        </div>
    );
}

export default Navigation;
