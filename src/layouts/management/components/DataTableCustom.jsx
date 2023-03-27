import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Button, Row } from "react-bootstrap";
import DataTable from "react-data-table-component-with-filter";
import Breadcrumb from "~/components/breadcrumb/Breadcrumb";
import { arrayObjectUniqueCollector } from "~/utils";
import DataTableHeader from "./DataTableHeader";

function DataTableCustom({ dataList, columns, title }) {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [data, setData] = useState(dataList);
    const [tableState, setTableState] = useState({
        selectedRows: [],
    });
    const Header = title;
    useEffect(() => {
        setData(dataList);
    }, [dataList]);

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
            <div style={{ zIndex: 10 }}>
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
            </div>
        );
    }, [data, selectedRows, toggleCleared]);
    return (
        <DataTable
            columns={columns}
            data={data}
            title={title}
            contextActions={contextActions}
            onSelectedRowsChange={handleRowSelected}
            selectableRows
            clearSelectedRows={toggleCleared}
            onRowClicked={(row) => console.log(row)}
            conditionalRowStyles={conditionalRowStyles}
            sortIcon={<FontAwesomeIcon icon={faArrowAltCircleDown} />}
            selectableRowsNoSelectAll
            pagination
            highlightOnHover
            responsive
            pointerOnHover
            theme="light"
        />
    );
}

export default memo(DataTableCustom);
