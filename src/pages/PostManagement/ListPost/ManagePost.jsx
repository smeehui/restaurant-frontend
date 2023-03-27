import React, { useCallback, useContext, useEffect, useState } from "react";
import useDebounce from "~/hooks/useDebounce";
import { useIsMount } from "~/hooks/useIsMount";
import DataTableCustom from "~/layouts/management/components/DataTableCustom";
import { AppContext } from "~/store";
import { API_CALLED, CALLING_API } from "~/store/constants";
import { getAllUsers, searchUsers } from "../service/userService";
import UserDTHeader from "./UserDTHeader";
import { columns } from "./userListData";

function ManagePost() {
    const [data, setData] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [state, dispatch] = useContext(AppContext);
    const isMount = useIsMount();

    const debouncedFilterText = useDebounce(filterText, 500);

    const handleFilter = useCallback((value) => {
        setFilterText(value);
    });

    const callSearchUsers = useCallback(async () => {
        dispatch(CALLING_API);
        const data = await searchUsers(debouncedFilterText).finally(() =>
            dispatch(API_CALLED),
        );
        setData(data);
    });

    useEffect(() => {
        if (isMount) return; //Skip call search api at first rendering
        callSearchUsers();
    }, [debouncedFilterText]);

    const filter = { filterText, handleFilter, callSearchUsers };

    useEffect(() => {
        dispatch(CALLING_API);
        getAllUsers()
            .then((data) => {
                setData(data);
            })
            .finally(() => dispatch(API_CALLED));
    }, []);
    return (
        <div className="position-relative" style={{ transition: "350ms" }}>
            {state.isCallingApi && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: 100,
                        verticalAlign: "middle",
                    }}
                >
                    <h1>Calling....</h1>
                </div>
            )}
            <DataTableCustom
                title={<UserDTHeader title="All User" filter={filter} />}
                dataList={data}
                columns={columns}
            />
        </div>
    );
}

export default ManagePost;
