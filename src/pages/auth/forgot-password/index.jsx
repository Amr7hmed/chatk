import React from 'react'
import AuthHeader from '../../../components/auth/authheader';
import { NavLink } from 'react-router-dom';
import FormForgotPassword from '../../../components/auth/forgot-password';

function ForgotPassword() {
  return (
    <main className='auth'>
      <AuthHeader
        Title={"Forgot password ?"} />
      <div className='auth__form mt-6'>
        <FormForgotPassword />

        <div className="mt-6 d-flex justify-content-center align-items-center">
          <NavLink to={"/auth/login"}>Remember your password ?</NavLink>
        </div>
      </div>
    </main>
  )
}

export default ForgotPassword;