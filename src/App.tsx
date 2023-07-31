import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import * as ROUTES from "./routes/routes";
import WithSuspense from "./components/HOC/Loader";
import { lazy } from "react";

const Feed = WithSuspense(lazy(() => import("./routes/feed")));
const Profile = WithSuspense(lazy(() => import("./routes/profile")));
const Settings = WithSuspense(lazy(() => import("./routes/settings")));
const Write = WithSuspense(lazy(() => import("./routes/write")));
const SignUp = WithSuspense(lazy(() => import("./routes/signup")));
const NotFound = WithSuspense(lazy(() => import("./routes/404")));
const Post = WithSuspense(lazy(() => import("./routes/post")));

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <ProtectedRoute Route={<Root />} />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <Feed />,
      },
      {
        path: ROUTES.WRITE,
        element: <Write />,
      },
      {
        path: ROUTES.SETTINGS,
        element: <Settings />,
      },
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: `${ROUTES.POST}/:postId`,
        element: <Post />,
      },
    ],
  },
  {
    path: ROUTES.SIGNUP,
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
