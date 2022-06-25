import {SubmitHandler} from "react-hook-form";
import {IconType} from "react-icons";

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
    sidebar?: boolean,
    icon?: IconType
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

export enum PostState {
    DRAFT = 'draft',
    PUBLISHED = 'published'
}

export type PostType = {
    slug: string
    title: string
}