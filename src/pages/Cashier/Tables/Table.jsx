import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { TableIcon } from "~/assets/icons/icons";
import ButtonCustom from "~/components/button/ButtonCustom";

function Table({ table }) {
    const { code, status, title } = table;
    return (
        <Col lg={3} md={3} sm={6} className="p-1">
            <Card>
                <Card.Header className="p-1 text-center d-flex justify-content-between align-items-center">
                 <ButtonCustom className="d-flex w-100 p-0 justify-content-center" title={title}/>
                  <ButtonCustom className="d-flex p-0 justify-content-center" icon={<FontAwesomeIcon icon={faBars} />}/>
                </Card.Header>
                <Card.Body className="p-0">
                    <TableIcon width="100%" height="100%"/>
                </Card.Body>
                <Card.Footer className="p-0 text-center">{status}</Card.Footer>
            </Card>
        </Col>
    );
}

export default Table;
