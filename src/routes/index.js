import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Page404 from "~/pages/Page404";
import { HeaderOnly } from "~/components/Layout";

//Public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile, layout: HeaderOnly },
    { path: "/*", component: Page404, layout: null }
];
//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
