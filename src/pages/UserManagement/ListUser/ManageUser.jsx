import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component-with-filter";
import { columns, userData } from "./userListData";

function ManageUser() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [data, setData] = useState(userData);
    const [selectedRow, setSelectedRow] = useState({});
    const handleRowSelected = useCallback((state) => {
        setSelectedRows(state.selectedRows);
        state.selectedRows.map((row) => {
            if (!row.selected) {
                return (row.selected = true);
            }
        });
    }, []);

    const conditionalRowStyles = [
        {
            when: (row) => row.selected,
            style: {
                backgroundColor: "green",
                userSelect: "none",
            },
        },
    ];

    const contextActions = useMemo(() => {
        console.log("memo");

        const handleDelete = () => {
            if (
                window.confirm(
                    `Are you sure you want to delete:\r ${selectedRows.map(
                        (r) => r.title,
                    )}?`,
                )
            ) {
                setToggleCleared(!toggleCleared);
                setData(differenceBy(data, selectedRows, "title"));
            }
        };

        return (
            <Button
                key="delete"
                onClick={handleDelete}
                style={{ backgroundColor: "red" }}
            >
                Delete
            </Button>
        );
    }, [data, selectedRows, toggleCleared]);
    return (
        <DataTable
            title="All users"
            columns={columns}
            data={data}
            selectableRows
            contextActions={contextActions}
            onSelectedRowsChange={(prevState) => {
                console.log(prevState);
            }}
            clearSelectedRows={toggleCleared}
            highlightOnHover
            onRowClicked={(row) => console.log(row)}
            conditionalRowStyles={conditionalRowStyles}
            pointerOnHover
            theme="dark"
            sortIcon={<FontAwesomeIcon icon={faArrowAltCircleDown} />}
            pagination
            responsive
        />
    );
}

export default ManageUser;
