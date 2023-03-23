import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component-with-filter";
import { arrayObjectUniqueCollector } from "~/utils";
import getAllUsers from "../service/userService";
import { columns } from "./userListData";

function ManageUser() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [data, setData] = useState([]);
    const [tableState, setTableState] = useState({
        selectedRows: [],
    });
    useEffect(() => {
        getAllUsers().then((data)=>{
            setData(data)
        })
    },[]);

    const handleRowSelected = useCallback(
        (state) => {
            setTableState((prev) => {
                const prevRows = prev.selectedRows || [];
                const nextRows = [...state.selectedRows];
                const currRow = arrayObjectUniqueCollector(
                    prevRows,
                    nextRows,
                    "id",
                )[0];
                if (currRow) currRow.selected = !currRow.selected;
                return {
                    ...prev,
                    ...state,
                };
            });
            setSelectedRows(state.selectedRows);
        },
        [selectedRows, tableState],
    );

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
            <>
                {tableState.selectedRows.length === 1 ? (
                    <>
                        <Button
                            key="edit"
                            onClick={handleDelete}
                            variant="success"
                        >
                            Edit
                        </Button>
                        <Button
                            key="delete"
                            onClick={handleDelete}
                            style={{ backgroundColor: "red" }}
                        >
                            Delete
                        </Button>
                    </>
                ) : (
                    <Button
                        key="delete"
                        onClick={handleDelete}
                        style={{ backgroundColor: "red" }}
                    >
                        Delete
                    </Button>
                )}
            </>
        );
    }, [data, selectedRows, toggleCleared]);

    const handleSelectedRow = (row) => {
        console.log(row);
    };
    return (
        <DataTable
            title="All users"
            columns={columns}
            data={data}
            selectableRows
            contextActions={contextActions}
            onSelectedRowsChange={handleRowSelected}
            clearSelectedRows={toggleCleared}
            highlightOnHover
            onRowClicked={(row) => console.log(row)}
            conditionalRowStyles={conditionalRowStyles}
            pointerOnHover
            theme="dark"
            sortIcon={<FontAwesomeIcon icon={faArrowAltCircleDown} />}
            pagination
            responsive
            selectableRowsNoSelectAll
        />
    );
}

export default ManageUser;
