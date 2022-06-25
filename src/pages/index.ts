import {Dashboard} from './Dashboard'
import {Posts} from './Posts'
import {NotFound} from "./NotFound";
import {Login} from "./Auth";
import {IAppPage} from "../types";
import PostUpdate from "./Posts/PostUpdate";
import {RiHome2Line, RiArticleLine} from "react-icons/ri";

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
        layout: true,
        sidebar: true,
        icon: RiHome2Line
    },
    {
        name: 'Posts',
        url: '/posts',
        component: Posts,
        layout: true,
        sidebar: true,
        icon: RiArticleLine
    },
    {
        name: 'Create Post',
        url: '/posts/create-post',
        component: PostUpdate,
        layout: true
    },
    {
        name: 'Update Post',
        url: '/posts/:slug',
        component: PostUpdate,
        layout: true
    }
]

export default pages