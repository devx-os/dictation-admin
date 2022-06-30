type TypeLanguageTranslation = {
    'section.title': string
    'buttons.create': string
}

interface ITypeTranslation {
    [key: string]: TypeLanguageTranslation
}

interface ITypeSettings {
    tableColumns: string[]
    formFields: object
}

type Type = {
    title: string
    slug: string
    settings: ITypeSettings
    translations: ITypeTranslation
}

type TypesFormValues = {
    types: Type[]
}

interface TypesFormProps extends IForm {
    initialValues?: PostFormValues;
    onSubmit: SubmitHandler<PostFormValues>;
}
