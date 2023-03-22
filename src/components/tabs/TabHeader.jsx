import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ButtonCustom from "../button/ButtonCustom";

function TabHeader({ className, ...props }) {
    return (
        <Row className={className} {...props}>
            <Col lg={11} className="d-flex">
                <ButtonCustom className=" py-0 px-2 mx-2" title="All" />
                <ButtonCustom className=" py-0 px-2 mx-2" title="All" />
                <ButtonCustom className=" py-0 px-2 mx-2" title="All" />
            </Col>
            <Col lg={1}>
                <ButtonCustom
                    className="p-0"
                    icon={<FontAwesomeIcon icon={faSearch} />}
                />
            </Col>
        </Row>
    );
}

export default TabHeader;
