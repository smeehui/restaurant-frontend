import clsx from "clsx";
import { Row } from "react-bootstrap";
import styles from "./Footer.module.scss";

function Footer() {
    return <Row className={clsx(styles.wrapper)}></Row>;
}

export default Footer;
