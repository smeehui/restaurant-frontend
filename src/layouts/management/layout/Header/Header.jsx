import { Button, Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ButtonCustom from "~/components/button/Button";
import { memo } from "react";

function Header() {
    const loginIcon = <FontAwesomeIcon icon={faEnvelope} />;

    return (
        <Container className={clsx("fixed-top", styles["site-header"])} fluid>
            <Row className="justify-content-between align-items-center h-100">
                <Col xs={2}>
                    <h3>Logo</h3>
                </Col>
                <Col xs={4}>
                    <ButtonCustom
                        size={"btn-sm"}
                        title={"login"}
                        icon={loginIcon}
                    />
                </Col>
            </Row>
            <Row>
                <Navigation />
            </Row>
        </Container>
    );
}

export default memo(Header);
