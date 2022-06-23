import {SubmitHandler} from "react-hook-form";

export interface ID {
    id: string
}

export interface IForm {
    initialValues?: any;
    onSubmit: SubmitHandler<any>;
}

export interface IAppPage {
    name: string
    url: string
    component: () => JSX.Element,
    layout?: boolean,
    icon?: () => JSX.Element
}

export interface IPaginationResponse {
    page: number,
    limit: number,
    total: number
}

export interface ISortResponse {

}

export interface IFilteredResponse {
    data: any[],
    pagination: IPaginationResponse
    sort: ISortResponse
}

export enum PostStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published'
}

export enum PostType {
    POST = 'post',
    PAGE = 'page'
}