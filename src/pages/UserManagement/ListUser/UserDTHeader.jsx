import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {memo, useRef} from "react";
import {Col, FormControl, Row} from "react-bootstrap";
import ButtonCustom from "~/components/button/ButtonCustom";

function UserDTHeader({ title, filter }) {
    const { filterText, handleFilter, callSearchUsers } = filter;
    const inputRef = useRef();
    const handleInput = (value) => {
        handleFilter(value);
    };
    return (
        <Row>
            <Col lg={6}>
                <h3>{title}</h3>
            </Col>
            <Col lg={6} className="d-flex">
                <FormControl
                    ref={inputRef}
                    type="text"
                    value={filterText}
                    onChange={(e) => handleInput(e.target.value)}
                />
                <ButtonCustom
                    onClick={() => callSearchUsers()}
                    className={"btn-sm mx-1 btn-outline-success"}
                    icon={<FontAwesomeIcon icon={faSearch} />}
                />
            </Col>
        </Row>
    );
}

export default memo(UserDTHeader);
