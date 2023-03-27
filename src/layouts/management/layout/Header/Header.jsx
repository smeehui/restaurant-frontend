import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";
import clsx from "clsx";
import ButtonCustom from "~/components/button/ButtonCustom";
import { memo, useRef } from "react";
import TippyCustom from "~/components/tippy/TippyCustom";
import { userTippyData } from "./headerData";
import { HomeIcon } from "~/assets/icons/icons";
function Header() {
    const loginBtnRef = useRef();

    const tippyData = userTippyData;

    return (
        <Container className={clsx("fixed-top", styles["site-header"])} fluid>
            <Row className="justify-content-between align-items-center h-100">
                <Col xs={2}>
                    <HomeIcon/>
                </Col>
                <Col xs={4}>
                    <TippyCustom
                        items={tippyData}
                        variants={{
                            trigger: "mouseenter",
                            hideOnClick: true,
                            interactive: true,
                            animation: "scale",
                        }}
                    >
                        <ButtonCustom
                            ref={loginBtnRef}
                            size={"btn-sm"}
                            title={"Quang Huy"}
                            img={
                                "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                            }
                            className="float-end"
                        />
                    </TippyCustom>
                </Col>
            </Row>
            <hr/>
            <Navigation />
        </Container>
    );
}

export default memo(Header);
