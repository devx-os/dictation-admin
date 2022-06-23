type LoginFormValues = {
    email: string
    password: string
    remember: boolean
}

interface LoginFormProps extends IForm {
    initialValues?: LoginFormValues;
    onSubmit: SubmitHandler<LoginFormValues>;
}
