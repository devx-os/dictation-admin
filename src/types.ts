import {SubmitHandler} from "react-hook-form";

export interface ID {
    id: string
}

export interface IForm {
    initialValues?: any;
    onSubmit: SubmitHandler<any>;
}

export interface IAppPage {
    title: string
    url: string
    component: () => JSX.Element,
    layout?: boolean,
    sidebar?: boolean,
    exact?: boolean,
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

export enum PostState {
    DRAFT = 'draft',
    PUBLISHED = 'published'
}

export type PostType = {
    slug: string
    title: string
}

export interface HookQueryOptions {
    onSuccess?: () => void
}

export interface DefaultFilters {
    limit?: number
    offset?: number
    fields?: any
    sort?: any
}