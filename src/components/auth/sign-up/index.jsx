import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { InputOuterData, InputPassword } from '../inputs';
import { useNavigate } from 'react-router-dom';

function FormSignUp() {
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  const state = {
    company_name: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    navigate(`/dashboard/conversations`);
  }
  const form = (props) => {
    return <form onSubmit={props.handleSubmit}>

      {/*Input Company name */}

      <InputOuterData errors={props.errors.company_name} values={props.values.company_name}
        LabelTitle={"Company name"} PlaceHolderTitle={"Your company or team name"}
        DatatypeInput={"company_name"} TypeInput={"text"} />

      {/*Input First name*/}

      <InputOuterData errors={props.errors.first_name} values={props.values.first_name}
        LabelTitle={"First name"} PlaceHolderTitle={"Your First name"}
        DatatypeInput={"first_name"} TypeInput={"text"} />

      {/*Input Last name*/}

      <InputOuterData errors={props.errors.last_name} values={props.values.last_name}
        LabelTitle={"Last name"} PlaceHolderTitle={"Your Last name"}
        DatatypeInput={"last_name"} TypeInput={"text"} />

      {/*Input Email*/}

      <InputOuterData errors={props.errors.email} values={props.values.email}
        LabelTitle={"Email"} PlaceHolderTitle={"Email"}
        DatatypeInput={"email"} TypeInput={"email"} />

      {/*Input Password*/}

      <InputPassword errors={props.errors.password} />
      <span className="errorfiled">{message}</span>
      <div className="mt-6">
        <button type="submit" className={"btn button-login button-active"}>
          Create account
        </button>
      </div>
    </form>
  }

  const schema = () => {
    const schema = Yup.object().shape({
      company_name: Yup.string().required("Company Name Is Required"),
      first_name: Yup.string().required("First name Is Required"),
      last_name: Yup.string().required("Last name Is Required"),
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

export default FormSignUp;
