import clsx from "clsx";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import styles from "./TippyCustom.module.scss";

function TippyItem({ title, icon, type, path }) {
    const navigate = useNavigate();
    let Icon = icon;
    const handleClick = () => {
        console.log(path);
        if (path) {
            navigate(path);
        }
    };
    return (
        <Row onClick={handleClick}>
            <Col className="px-3">
                <div className={clsx(styles["item"], styles[type])}>
                    {icon && (
                        <span className={clsx(styles["icon"])}>{<Icon />}</span>
                    )}
                    {title && <p className={clsx(styles["text"])}>{title}</p>}
                </div>
            </Col>
        </Row>
    );
}

export default TippyItem;
