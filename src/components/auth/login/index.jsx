import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { InputOuterData, InputPassword } from '../inputs';
import { useNavigate } from 'react-router-dom';

function FormLogin() {
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  const state = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    navigate(`/dashboard/conversations`);
  }
  const form = (props) => {
    return <form onSubmit={props.handleSubmit}>

      <InputOuterData errors={props.errors.email} values={props.values.email}
        LabelTitle={"Email"} PlaceHolderTitle={"Email"}
        DatatypeInput={"email"} TypeInput={"email"} />

      <InputPassword errors={props.errors.password} />
      <span className="errorfiled">{message}</span>
      <div className="mt-6">
        <button type="submit" className={"btn button-login button-active"} >Sign In</button>
      </div>
    </form>
  }

  const schema = () => {
    const schema = Yup.object().shape({
      email: Yup.string().required("Email Is Required"),
      password: Yup.string().required('Password Is Required'),
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

export default FormLogin;
