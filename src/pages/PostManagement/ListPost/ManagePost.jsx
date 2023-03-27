import React, {useCallback, useContext, useEffect, useState} from "react";
import useDebounce from "~/hooks/useDebounce";
import {useIsMount} from "~/hooks/useIsMount";
import DataTableCustom from "~/layouts/management/components/DataTableCustom";
import {AppContext} from "~/store";
import PostDTHeader from "./PostDTHeader.jsx";
import {columns} from "./postTBFormat.jsx";
import {API_CALLED, CALLING_API} from "~/store/constants.js";
import {getAllPosts} from "~/pages/PostManagement/service/postService.jsx";

function ManagePost(callback, deps) {
    const [data, setData] = useState([]);
    const [state, dispatch] = useContext(AppContext);
    const isMount = useIsMount();
    const handleFilter = useCallback((filter) => {
        console.log(filter)
    });
    const filter = {handleFilter}

    useEffect(() => {
        dispatch(CALLING_API);
        getAllPosts()
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
                title={<PostDTHeader title="All posts" filter={filter} />}
                dataList={data}
                columns={columns}
            />
        </div>
    );
}

export default ManagePost;
