import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import ButtonCustom from "~/components/button/ButtonCustom";

function Search() {
    return (
        <Form>
            <InputGroup>
                <FormControl type="text" />
                <ButtonCustom className={"btn-sm border-1 border"} icon={<FontAwesomeIcon icon={faSearch} />} />
            </InputGroup>
        </Form>
    );
}

export default Search;
