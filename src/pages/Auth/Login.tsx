import React from 'react';
import LoginForm from "./LoginForm";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const handleLoginFormSubmit = (values: LoginFormValues) => {
        console.log('LOGIN FORM VALUES\n', values)
        if (values.email === 'admin@demo.com' && values.password === 'demo') navigate('/dashboard')
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
                        <LoginForm onSubmit={handleLoginFormSubmit} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;