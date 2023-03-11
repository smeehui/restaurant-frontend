import clsx from "clsx";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppContext } from "~/store";
import Header from "../Header/Header";
import RightNav from "../RightNav/RightNav";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
    const [state] = useContext(AppContext);
    const { isShowSidebar } = state;
    return (
        <Container fluid>
            <Header />
            <Row className={clsx(styles.wrapper)}>
                <Col
                    lg={2}
                    className={clsx("position-relative", {
                        [styles.show]: isShowSidebar,
                        [styles.hide]: !isShowSidebar,
                    })}
                >
                    <RightNav />
                </Col>
                <Col
                    lg={10}
                    md={10}
                    sm={12}
                    className={clsx(styles["content"])}
                >
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default DefaultLayout;
