import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonCustom from "~/components/button/ButtonCustom";
import { AppContext } from "~/store";
import { TOGGLE_SIDEBAR } from "~/store/constants";
import styles from "./Header.module.scss";

function Navigation() {
    const [state, dispatch] = useContext(AppContext);
    const { isShowSidebar } = state;
    return (
        <Row className={clsx(styles["header-nav"])}>
            <Col lg={1}>
                <ButtonCustom
                    className={clsx(styles["toggle"])}
                    onClick={() => dispatch(TOGGLE_SIDEBAR)}
                    size={"btn-sm"}
                    icon={
                        isShowSidebar ? (
                            <FontAwesomeIcon icon={faTimes} width={12}/>
                        ) : (
                            <FontAwesomeIcon icon={faBars} width={12}/>
                        )
                    }
                />
            </Col>
        </Row>
    );
}

export default Navigation;
