import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Col, Row } from "react-bootstrap";
import { useProSidebar } from "react-pro-sidebar";

import Breadcrumb from "~/components/breadcrumb/Breadcrumb";
import ButtonCustom from "~/components/button/ButtonCustom";
import styles from "./Header.module.scss";

function Navigation() {
    const { collapseSidebar, collapsed } = useProSidebar();
    return (
        <Row className={clsx(styles["header-nav"])}>
            <Col lg={1}>
                <ButtonCustom
                    className={clsx(styles["toggle"])}
                    onClick={() => collapseSidebar()}
                    size={"btn-sm"}
                    icon={
                        collapsed ? (
                            <FontAwesomeIcon icon={faTimes} width={12} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} width={12} />
                        )
                    }
                />
            </Col>
            <Col lg={3}>
                <Breadcrumb />
            </Col>
        </Row>
    );
}

export default Navigation;
