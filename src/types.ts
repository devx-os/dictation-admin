import {SubmitHandler} from "react-hook-form";

export enum ROUTE {
    LOGIN = '/',
    SIGNUP = '/signup',
    DASHBOARD = '/dashboard',
    TYPE_POST = '/types/post',
    TYPE_POST_CREATE = '/types/post/create-post',
    TYPE_POST_UPDATE = '/types/post/:slug',
    TYPE_PAGE = '/types/page',
    TYPE_PAGE_CREATE = '/types/post/create-page',
    TYPE_PAGE_UPDATE = '/types/page/:slug',
    SETTINGS_GENERAL = '/settings/general',
    SETTINGS_TYPES = '/settings/types',
    USER_SETTINGS = '/user/settings',
    USER_PROFILE = '/user/profile',
    NOT_FOUND = '*'
}

export interface ID {
    id: string
}

export interface IForm {
    initialValues?: any;
    onSubmit: SubmitHandler<any>;
}

export interface IAppPage {
    title: string,
    url: ROUTE,
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

export interface IIconButton {
    icon: () => JSX.Element,
    className?: string,
    children: string,
    onClick: () => void
}