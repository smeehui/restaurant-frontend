import clsx from "clsx";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Navigation from "../Header/Navigation";
import RightNav from "../RightNav/RightNav";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
   
    return (
        <Container fluid>
            <Header />
            <Row className={clsx(styles.wrapper)}>
                <Col
                    lg={2}
                    className={clsx("position-relative", {
                        [styles.show]: showSideBar,
                        [styles.hide]: !showSideBar,
                    })}
                >
                    <RightNav
                        showSideBar={showSideBar}
                        handleShowSidebar={handleShowSidebar}
                    />
                </Col>
                <Col lg={showSideBar?10:12} md={10} sm={12} className={clsx(styles["content"])}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default DefaultLayout;
