import {Dashboard} from './Dashboard'
import {Posts} from './Posts'
import {NotFound} from "./NotFound";
import {Login} from "./Auth";
import {IAppPage} from "../types";
import PostUpdate from "./Posts/PostUpdate";
import {RiHome2Line, RiArticleLine} from "react-icons/ri";
import Pages from "./Pages/Pages";
import Types from "./Settings/Types/Types";

const pages: IAppPage[] = [
    {
        title: '404 Not Found',
        url: '*',
        component: NotFound
    },
    {
        title: 'Login',
        url: '/',
        component: Login
    },
    {
        title: 'Dashboard',
        url: '/dashboard',
        component: Dashboard,
        layout: true,
        sidebar: true,
        icon: RiHome2Line as () => JSX.Element
    },
    {
        title: 'Posts',
        url: '/types/post',
        component: Posts,
        layout: true,
        icon: RiArticleLine as () => JSX.Element
    },
    {
        title: 'Create Post',
        url: 'types/post/create-post',
        component: PostUpdate,
        layout: true
    },
    {
        title: 'Update Post',
        url: 'types/post/:slug',
        component: PostUpdate,
        layout: true
    },
    {
        title: 'Pages',
        url: '/types/page',
        component: Pages,
        layout: true,
        icon: RiArticleLine as () => JSX.Element
    },
    {
        title: 'Types',
        url: '/settings/types',
        component: Types,
        layout: true
    }
]

export default pages