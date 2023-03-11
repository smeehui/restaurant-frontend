import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import ButtonCustom from "~/components/button/Button";
import { AppContext } from "~/store";
import { TOGGLE_SIDEBAR } from "~/store/constants";
import styles from "./Header.module.scss";

function Navigation() {
    const [state, dispatch] = useContext(AppContext);
    const { isShowSidebar } = state;
    return (
        <Row className={clsx(styles["header-nav"])}>
            <div
                className={clsx(styles["toggle"], "align-self-start")}
                onClick={() => dispatch(TOGGLE_SIDEBAR)}
            >
                <ButtonCustom
                    size={"btn-sm"}
                    icon={
                        isShowSidebar ? (
                            <FontAwesomeIcon icon={faTimes} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} />
                        )
                    }
                />
            </div>
        </Row>
    );
}

export default Navigation;
