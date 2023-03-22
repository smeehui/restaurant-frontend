import clsx from "clsx";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ButtonCustom from "../button/ButtonCustom";
import TabHeader from "./TabHeader";

import styles from "./TabsCustom.module.scss";
function TabsCustom({ titles, contents, buttons }) {
    console.log(buttons);
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={titles[0].key}>
            <Row className="mx-1">
                <Col xs={6}>
                    <Nav variant="pills" className="flex-row px-3">
                        {titles.map((item, index) => {
                            const { title, key } = item;
                            return (
                                <Nav.Item key={index}>
                                    <Nav.Link
                                        eventKey={key}
                                        className={clsx(
                                            "py-1 px-2",
                                            styles["tab-select"],
                                        )}
                                    >
                                        {title}
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })}
                    </Nav>
                </Col>
                {buttons && (
                    <Col xs={6}>
                        {buttons.map((button, index) => (
                            <ButtonCustom
                                iconOnly
                                className="p-0 rounded-circle justify-content-center"
                                key={index}
                                icon={button.icon}
                            />
                        ))}
                    </Col>
                )}
                <Col sm={12} className={clsx(styles["content-wrapper"])}>
                    <TabHeader className="p-2" />

                    {contents.map((item, index) => {
                        const { content, key } = item;
                        return (
                            <Tab.Content key={index}>
                                <Tab.Pane eventKey={key}>{content}</Tab.Pane>
                            </Tab.Content>
                        );
                    })}
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default TabsCustom;
