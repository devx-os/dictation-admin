type LoginFormValues = {
    username: string
    password: string
    remember: boolean
}

interface LoginFormProps extends IForm {
    initialValues?: LoginFormValues;
    onSubmit: SubmitHandler<LoginFormValues>;
}

type SignUpFormValues = {
    email: string
    password: string
    repeatedPassword: string
}

interface SignUpFormProps extends IForm {
    initialValues?: SignUpFormValues;
    onSubmit: SubmitHandler<SignUpFormValues>;
}