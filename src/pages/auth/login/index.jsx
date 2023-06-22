import React from 'react'
import AuthHeader from '../../../components/auth/authheader';
import FormLogin from '../../../components/auth/login';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <main className='auth'>
      <AuthHeader
        Title={"Sign into your account"} />

      <div className='auth__form mt-6'>
        <FormLogin />
        <div className="mt-6 d-flex justify-content-between align-items-center">
          <NavLink to={"/auth/sign-up"}>Sign up</NavLink>
          <NavLink to={"/auth/forgot-password"}>Forgot password</NavLink>
        </div>
      </div>
    </main>
  )
}

export default Login;