import * as React from 'react';
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Input} from "../../components/Form";
import {Link} from "react-router-dom";

const defaultValues: SignUpFormValues = {
    email: '',
    password: '',
    repeatedPassword: ''
}

const schema = yup
    .object().shape({
        email: yup.string().email().required(),
        password: yup.string().required('Password is required'),
        repeatedPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
    })

const SignUpForm = ({initialValues, onSubmit}: SignUpFormProps) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<SignUpFormValues>({
        resolver: yupResolver(schema),
        defaultValues: initialValues || defaultValues,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Input className='my-6' {...register('email')} placeholder='Username or Email address' type='email'/>
            <Input className='mb-6' {...register('password')} placeholder='Password' type='password'/>
            <Input className='mb-6' {...register('repeatedPassword')} placeholder='Repeatp password' type='password'/>

            <div className="flex justify-between items-center mb-6">
                {/*<div className="form-group form-check">*/}
                {/*<Checkbox {...register('remember')} label='Remember me'/>*/}
                <Link to='/'
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >Back to sign in</Link>
                <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >Forgot password?</a
                >
            </div>
            <button
                type="submit"
                className="btn btn-primary w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
            >
                Sign up
            </button>

            {/*<div className='divider'>*/}
            {/*    <p className="text-center font-semibold mx-4 mb-0">OR</p>*/}
            {/*</div>*/}

            {/*<a*/}
            {/*    className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"*/}
            {/*    style={{backgroundColor: "#3b5998"}}*/}
            {/*    href="#"*/}
            {/*    role="button"*/}
            {/*    data-mdb-ripple="true"*/}
            {/*    data-mdb-ripple-color="light"*/}
            {/*>*/}
            {/*    <CgFacebook/>*/}
            {/*    Continue with Facebook*/}
            {/*</a>*/}
            {/*<a*/}
            {/*    className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"*/}
            {/*    style={{backgroundColor: "#55acee"}}*/}
            {/*    href="#"*/}
            {/*    role="button"*/}
            {/*    data-mdb-ripple="true"*/}
            {/*    data-mdb-ripple-color="light"*/}
            {/*>*/}
            {/*    <CgTwitter/>*/}
            {/*    Continue with Twitter*/}
            {/*</a>*/}
        </form>
    );
};

export default SignUpForm;