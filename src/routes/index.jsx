import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/index"
import Explore from "../pages/explore/index"
import Notifications from "../pages/notifications/index"
import NotFound from "~/pages/404/NotFound";
import MainLayout from "~/Layouts/main";
import Messages from "~/pages/messages";
import Lists from "~/pages/lists";
import Premium from "~/pages/premium";
import Profile from "~/pages/profile";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // MainLayout sayesinde sidebarda tum componentler görunecek (Outlet ile)
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "explore",
                element: <Explore />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
            {
                path: "messages",
                element: <Messages />
            },
            {
                path: "lists",
                element: <Lists />
            },
            {
                path: "verified-choose",
                element: <Premium />
            },
            {
                path: ":slug",
                //sidebarda profil'e tıklarsam MainMenu path'i, userName'i verir
                element: <Profile />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default routes;