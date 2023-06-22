import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { useState } from 'react';


export function InputOuterData(props) {
  const { errors, values ,LabelTitle,PlaceHolderTitle,DatatypeInput,TypeInput} = props;
  return (
    <div className={"input_form mt-4"}>
      <label>{LabelTitle}</label>
      <Field type={TypeInput} component="input"
        className={errors ? "form-control is-invalid" : "form-control"}
        placeholder={PlaceHolderTitle} valie={values} name={DatatypeInput} />
      <ErrorMessage name={DatatypeInput} component="div" className='errorfiled' />
    </div>
  )
};

export function InputPassword(props) {
  const { errors } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div className={"input_form mt-4"}>
      <label className="form-label">Password</label>

      <div className="position-relative">
        <Field type={toggle === false ? "password" : "text"}
          name="password"
          placeholder={"Password"}
          className={errors ? "form-control is-invalid" : "form-control"}
          id="form-control-password" />

        <span className={errors ? "hide" : "toggoleimg"}
        onClick={() => setToggle(!toggle)}>
          {toggle === false ?
            <img src="/assets/icons/showpassword.svg" alt="Invisible"
              className={"invisible_img"}
            />
            :
            <img src="/assets/icons/not-showpassword.svg" alt="Visible"
              className={"invisible_img"}
            />
          }
        </span>

      </div>


      <ErrorMessage name="password" component="div" className='errorfiled' />
    </div>

  )
};

