import {Dashboard} from './Dashboard'
import {Posts} from './Posts'
import {NotFound} from "./NotFound";
import {Login} from "./Auth";
import {IAppPage} from "../types";

const pages: IAppPage[] = [
    {
        name: '404 Not Found',
        url: '*',
        component: NotFound
    },
    {
        name: 'Login',
        url: '/',
        component: Login
    },
    {
        name: 'Dashboard',
        url: '/dashboard',
        component: Dashboard,
        layout: true
    },
    {
        name: 'Posts',
        url: '/posts',
        component: Posts,
        layout: true
    }
]

export default pages