import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { Form } from "react-router-dom";
import ButtonCustom from "~/components/button/ButtonCustom";

function DataTableHeader({ title,handleFilter,filterText }) {
   
    return (
        <Row className="w-100">
            <Col lg={6}>
                <h3>{title}</h3>
            </Col>
            <Col lg={6}>
                <InputGroup>
                    <FormControl type="text" value={filterText} onChange={handleFilter}/>
                    <ButtonCustom
                        className={"btn-sm border-1 border"}
                        icon={<FontAwesomeIcon icon={faSearch} />}
                    />
                </InputGroup>
            </Col>
        </Row>
    );
}

export default memo(DataTableHeader);
