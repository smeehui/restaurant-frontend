import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../NewUser.module.scss";

import {
    Col,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    FormText,
    Image,
    Row,
} from "react-bootstrap";
import clsx from "clsx";
import ButtonCustom from "~/components/button/ButtonCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function NewUserForm() {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .min(4, "Must be 4 characters or less")
                .required("Required"),
            email: Yup.string()
                .matches(
                    /^[A-Z0-9._]+@[A-Z0-9.-]{2,}\.[A-Z]{2,4}$/i,
                    "Invalid email address",
                )
                .required("Required"),
        }),
        onSubmit: (values) => {
            const { fullName, email, password } = values;
            let formData = new FormData();
            formData.append("fullName",fullName);
            formData.append("email",email);
            formData.append("password",password);
            console.log(formData);
        },
    });
    let fullNameError = !!(formik.touched.fullName && formik.errors.fullName);
    let emailError = !!(formik.touched.email && formik.errors.email);
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
                <Col xs={6}>
                    <FormGroup className="mb-3">
                        <FormLabel className="text-white" htmlFor="fullNameCre">
                            Full Name
                        </FormLabel>
                        <FormControl
                            name="fullName"
                            type="text"
                            id="fullNameCre"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                            className={
                                fullNameError && "border-2 border-danger"
                            }
                        />
                        {fullNameError ? (
                            <FormText className="text-danger border-danger fw-bold">
                                {formik.errors.fullName}
                            </FormText>
                        ) : null}
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel className="text-white" htmlFor="emailCre">
                            Email
                        </FormLabel>
                        <FormControl
                            autoComplete="email"
                            type="email"
                            id="emailCre"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={emailError && "border-2 border-danger"}
                        />
                        {emailError ? (
                            <FormText className="text-danger border-danger fw-bold">
                                {formik.errors.email}
                            </FormText>
                        ) : null}
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel className="text-white" htmlFor="passwordCre">
                            Password
                        </FormLabel>
                        <FormControl
                            type="password"
                            id="passwordCre"
                            autoComplete="current-password"
                        />
                    </FormGroup>
                </Col>
                <Col xs={6}>
                    <FormGroup className="text-white position-relative h-100 d-flex">
                        <FormLabel
                            className={clsx(styles["select-text"])}
                            htmlFor="fileCre"
                        >
                            Chọn ảnh
                        </FormLabel>
                        <FormControl
                            id="fileCre"
                            type="file"
                            multiple
                            accept="image/*"
                            hidden
                        />
                        <Image
                            id="imgPreviewCre"
                            className={clsx(
                                styles["img-preview"],
                                "container-fluid",
                            )}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <ButtonCustom
                        type="submit"
                        title={"Create"}
                        icon={<FontAwesomeIcon icon={faPlusCircle} />}
                    />
                </Col>
            </Row>
        </Form>
    );
}

export default NewUserForm;
