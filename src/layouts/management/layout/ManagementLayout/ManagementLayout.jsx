import clsx from "clsx";
import {useContext} from "react";
import {Container} from "react-bootstrap";
import {ProSidebarProvider} from "react-pro-sidebar";
import {AppContext} from "~/store";
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