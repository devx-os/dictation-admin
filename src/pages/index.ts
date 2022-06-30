import {Dashboard} from './Dashboard'
import {Posts} from './Posts'
import {NotFound} from "./NotFound";
import {SignIn} from "./Auth";
import {IAppPage, ROUTE} from "../types";
import PostUpdate from "./Posts/PostUpdate";
import {RiArticleLine, RiHome2Line} from "react-icons/ri";
import Pages from "./Pages/Pages";
import Types from "./Settings/Types/Types";
import SignUp from "./Auth/SignUp";
import {General} from "./Settings/General";
import {Profile} from "./User/Profile";
import {UserSettings} from "./User/UserSettings";

const pages: IAppPage[] = [
    {
        title: '404 Not Found',
        url: ROUTE.NOT_FOUND,
        component: NotFound
    },
    {
        title: 'Login',
        url: ROUTE.LOGIN,
        component: SignIn
    },
    {
        title: 'SignUp',
        url: ROUTE.SIGNUP,
        component: SignUp
    },
    {
        title: 'Dashboard',
        url: ROUTE.DASHBOARD,
        component: Dashboard,
        layout: true,
        sidebar: true,
        icon: RiHome2Line as () => JSX.Element
    },
    {
        title: 'Posts',
        url: ROUTE.TYPE_POST,
        component: Posts,
        layout: true,
        icon: RiArticleLine as () => JSX.Element
    },
    {
        title: 'Create Post',
        url: ROUTE.TYPE_POST_CREATE,
        component: PostUpdate,
        layout: true
    },
    {
        title: 'Update Post',
        url: ROUTE.TYPE_POST_UPDATE,
        component: PostUpdate,
        layout: true
    },
    {
        title: 'Pages',
        url: ROUTE.TYPE_PAGE,
        component: Pages,
        layout: true,
        icon: RiArticleLine as () => JSX.Element
    },
    {
        title: 'Create Page',
        url: ROUTE.TYPE_PAGE_CREATE,
        component: PostUpdate,
        layout: true
    },
    {
        title: 'Update Page',
        url: ROUTE.TYPE_PAGE_UPDATE,
        component: PostUpdate,
        layout: true
    },
    {
        title: 'General',
        url: ROUTE.SETTINGS_GENERAL,
        component: General,
        layout: true
    },
    {
        title: 'Types',
        url: ROUTE.SETTINGS_TYPES,
        component: Types,
        layout: true
    },
    {
        title: 'User settings',
        url: ROUTE.USER_PROFILE,
        component: Profile,
        layout: true
    },
    {
        title: 'User settings',
        url: ROUTE.USER_SETTINGS,
        component: UserSettings,
        layout: true
    }
]

export default pages