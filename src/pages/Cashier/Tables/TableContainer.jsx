import React from "react";
import { Col, Row } from "react-bootstrap";
import { tableData } from "../data/tableData";
import Table from "./Table";

import styles from "./TableContainer.module.scss";

function TableContainer() {
    return (
        <Row>
            {tableData.map((table) => {
                return <Table key={table.code} table={table} />;
            })}
        </Row>
    );
}

export default TableContainer;
