import { APP_ROUTES } from "../constants/route.constant";
import Layout from "../layouts/app.layout";
import { AuthLayout } from "../layouts/auth.layout";
import { ProtectedRoute } from "../routers/protected.route";
import LoginScreen from "../pages/login-register/index";
import { lazy } from "react";

const ExploreScreen = lazy(() => import("../pages/explore/index"));
const MyBlogsScreen = lazy(() => import("../pages/my-blogs/index"));
const MyFavouritesScreen = lazy(() => import("../pages/favourites/index"));


// Application routes configuration
export const ROUTE_CONFIG = [
  {
    path: APP_ROUTES.ROOT,
    layout: Layout,
    guard: ProtectedRoute,
    redirectTo: APP_ROUTES.EXPLORE,
    children: [
        { path: APP_ROUTES.ROOT, element: ExploreScreen },
        { path: APP_ROUTES.EXPLORE, element: ExploreScreen },
        { path: APP_ROUTES.MY_BLOGS, element: MyBlogsScreen },
        { path: APP_ROUTES.MY_FAVOURITES, element: MyFavouritesScreen },

    ],
  },
  {
    path: APP_ROUTES.LOGIN,
    layout: AuthLayout,
    children: [
      { path: APP_ROUTES.LOGIN, element: LoginScreen },
    ],
  },
];
