import React from 'react'
import AuthHeader from '../../../components/auth/authheader';
import { NavLink } from 'react-router-dom';
import FormSignUp from '../../../components/auth/sign-up';

function SignUp() {
    return (
        <main className='auth'>
            <AuthHeader
                Title={"Create an account"} />
            <div className='auth__form mt-6'>
                <FormSignUp />
                <div className="mt-6 d-flex justify-content-center align-items-center">
                    <NavLink to={"/auth/login"}>Already have an account ?</NavLink>
                </div>
            </div>
        </main>
    )
}

export default SignUp;