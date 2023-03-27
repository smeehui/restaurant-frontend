import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../NewUser.module.scss";
import userDefaultImg from "~/assets/img/default-user.png";

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
import ErrorMessage from "./ErrorMessage";

function NewUserForm() {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
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
            phone: Yup.string().required("Phone is required"),
            address: Yup.string().required("Address is required"),
        }),
        onSubmit: (values) => {
            const { fullName, email, phone, address } = values;
            let formData = new FormData();
            formData.append("fullName", fullName);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("address", address);
            console.log(formData);
        },
    });
    let fullNameError = !!(formik.touched.fullName && formik.errors.fullName);
    let emailError = !!(formik.touched.email && formik.errors.email);
    let phoneError = !!(formik.touched.phone && formik.errors.phone);
    let addressError = !!(formik.touched.address && formik.errors.address);

    const imgRef = useRef();

    const [imgSrc, setImgSrc] = useState(userDefaultImg);

    const handleUploadImg = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const src = URL.createObjectURL(file);
            setImgSrc(src);
        
        };
    };

    return (
        <Form onSubmit={formik.handleSubmit} className={clsx(styles.form)}>
            <Row className="mb-3">
                <Col lg={4} md={6} sm={12}>
                    <FormGroup>
                        <FormLabel htmlFor="fullNameCre">Full Name</FormLabel>
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
                            <ErrorMessage message={formik.errors.fullName} />
                        ) : (
                            <ErrorMessage className="invisible" message="|" />
                        )}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="emailCre">Email</FormLabel>
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
                            <ErrorMessage message={formik.errors.email} />
                        ) : (
                            <ErrorMessage className="invisible" message={"|"} />
                        )}
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup>
                        <FormLabel htmlFor="phoneCre">Phone</FormLabel>
                        <FormControl
                            name="phone"
                            type="text"
                            id="phoneCre"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            className={phoneError && "border-2 border-danger"}
                        />
                        {phoneError ? (
                            <ErrorMessage message={formik.errors.phone} />
                        ) : (
                            <ErrorMessage className="invisible" message={"|"} />
                        )}
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="addressCre">Address</FormLabel>
                        <FormControl
                            type="text"
                            id="addressCre"
                            name="address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            className={addressError && "border-2 border-danger"}
                        />
                        {addressError ? (
                            <ErrorMessage message={formik.errors.address} />
                        ) : (
                            <ErrorMessage className="invisible" message={"|"} />
                        )}
                    </FormGroup>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <FormGroup className="text-white position-relative h-100 d-flex justify-content-center">
                        <FormLabel
                            className={clsx(styles["select-text"])}
                            htmlFor="fileCre"
                        ></FormLabel>
                        <FormControl
                            ref={imgRef}
                            id="fileCre"
                            type="file"
                            multiple
                            accept="image/*"
                            hidden
                            onChange={handleUploadImg}
                        />
                        <Image
                            id="imgPreviewCre"
                            className={clsx(
                                styles["img-preview"],
                                "container-fluid",
                            )}
                            src={imgSrc}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={2} md={6} sm={12}>
                    <ButtonCustom
                        type="submit"
                        title={"Create"}
                        icon={<FontAwesomeIcon icon={faPlusCircle} />}
                        variant="success"
                        className="text-success"
                    />
                </Col>
            </Row>
        </Form>
    );
}

export default NewUserForm;
