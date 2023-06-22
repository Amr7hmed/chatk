import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { InputOuterData } from '../inputs';

function FormForgotPassword() {
    const [message, setMessage] = useState("");
    const state = {
        email: "",
    };
    const onSubmit = (values) => {
        console.log(values);
    }
    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>

            <InputOuterData errors={props.errors.email} values={props.values.email}
                LabelTitle={"Email"} PlaceHolderTitle={"Email"}
                DatatypeInput={"email"} TypeInput={"email"} />

            <span className="errorfiled">{message}</span>
            <div className="mt-6">
                <button type="submit" className={"btn button-login button-active"}>
                    Send Link
                </button>
            </div>
        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            email: Yup.string().required("Email Is Required"),
        });
        return schema;
    }


    return (
        <>
            <Formik
                initialValues={state}
                onSubmit={onSubmit}
                render={form}
                validationSchema={schema()}
                validateOnChange={false}
                enableReinitialize={true}
                validateOnBlur={false}
            />
        </>
    )
}

export default FormForgotPassword;
