import clsx from "clsx";
import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "./MenuContainer.module.scss";

function MenuItem({ item }) {
    const { img, unit, title } = item;
    return (
        <Col lg={3} md={3} sm={6} className={clsx("p-1", styles.wrapper)}>
            <Card>
                <Card.Body className="p-0">
                    <Card.Img src={img} className="p-1 rounded-2"/>
                </Card.Body>
                <Card.Footer className="p-0 text-center">
                    <p>{title}</p>
                    <p>({unit})</p>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default MenuItem;
