import {PostState} from "../../types";

type PostFormValues = {
    title: string
    state: PostState
    type: any
}

interface PostFormProps extends IForm {
    initialValues?: PostFormValues;
    onSubmit: SubmitHandler<PostFormValues>;
}