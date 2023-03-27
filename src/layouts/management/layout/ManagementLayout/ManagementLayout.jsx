import clsx from "clsx";
import { useContext, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useLocation } from "react-router-dom";
import { AppContext } from "~/store";
import Header from "../Header/Header";
import RightNav from "../RightNav/RightNav";
import styles from "./ManagementLayout.module.scss";

function ManagementLayout({ children }) {
    const [state] = useContext(AppContext);
    const { isShowSidebar } = state;
    return (
        <ProSidebarProvider>
            <Container fluid>
                <Header />
                <div className={clsx(styles.wrapper, "d-flex")}>
                    <RightNav className="float-left" />
                    <div style={{ flex: 1 }}>{children}</div>
                </div>
            </Container>
        </ProSidebarProvider>
    );
}

export default ManagementLayout;
