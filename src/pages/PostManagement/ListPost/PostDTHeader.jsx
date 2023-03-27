import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {Col, FormControl, FormSelect, Row} from "react-bootstrap";
import ButtonCustom from "~/components/button/ButtonCustom";
import useDebounce from "~/hooks/useDebounce.jsx";

function PostDTHeader({ title, filter }) {
    const {handleFilter } = filter;
    const [filterParams,setFilterParams]= useState({text:"",status:""})
    const inputRef = useRef();

    const debouncedFilter = useDebounce(filterParams, 500);

    const handleSetFilterParams = useCallback((e)=>{
        setFilterParams({...filterParams,[e.target.name]:e.target.value})
    },[debouncedFilter]);

    useEffect(() => {
        handleFilter(filterParams)
    }, [debouncedFilter]);
    

    return (
        <Row>
            <Col lg={3}>
                <h3>{title}</h3>
            </Col>
            <Col lg={5}></Col>
            <Col lg={1}>
               <FormSelect value={filterParams.status} name={"status"} onChange={handleSetFilterParams}>
                   <option>--Status---</option>
                   <option value={"REFUSED"}>Đã từ chối</option>
                   <option value={"APPROVED"}>Đã đăng</option>
               </FormSelect>
            </Col>
            <Col lg={3} className="d-flex align-self-end">
                <FormControl
                    ref={inputRef}
                    type="text"
                    name={"text"}
                    value={filterParams.text}
                    onChange={handleSetFilterParams}
                />
                <ButtonCustom
                    className={"btn-sm mx-1 btn-outline-success"}
                    icon={<FontAwesomeIcon icon={faSearch} />}
                />
            </Col>
        </Row>
    );
}

export default memo(PostDTHeader);
