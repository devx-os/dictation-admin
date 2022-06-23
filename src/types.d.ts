import {SubmitHandler} from "react-hook-form";

interface ID {
    id: string
}

interface IForm {
    initialValues?: any;
    onSubmit: SubmitHandler<any>;
}
interface IAppPage {
    name: string
    url: string
    component: () => JSX.Element,
    layout?: boolean,
    icon?: () => JSX.Element
}

interface IPaginationResponse {
    page: number,
    limit: number,
    total: number
}

interface IFilteredResponse {
    data: any[],
    pagination: IPaginationResponse
}