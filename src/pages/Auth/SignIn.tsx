import React from 'react';
import SignInForm from "./SignInForm";
import {useNavigate} from "react-router-dom";
import useSignIn from "../../services/auth/hooks/useSignIn";
import {useGlobalLoader} from "../../hooks";
import {ROUTE} from "../../types";

const SignIn = () => {
    const navigate = useNavigate()
    const {withLoadingRequest} = useGlobalLoader()
    const {mutateAsync: signIn} = useSignIn({})

    const onSubmitLoginForm = async (values: LoginFormValues) => {
        if (values.username === 'admin@demo.com' && values.password === 'demo') {
            navigate(ROUTE.DASHBOARD)
        } else {
            withLoadingRequest(signIn(values))
        }
    }

    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="intro"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <SignInForm onSubmit={onSubmitLoginForm} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;