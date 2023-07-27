import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import * as ROUTES from "./routes/routes";
import withSuspense from "./components/HOC/Loader";
import { lazy } from "react";

const Profile = withSuspense(lazy(() => import("./routes/profile")));
const Settings = withSuspense(lazy(() => import("./routes/settings")));
const Write = withSuspense(lazy(() => import("./routes/write")));
const SignUp = withSuspense(lazy(() => import("./routes/signup")));
const NotFound = withSuspense(lazy(() => import("./routes/404")));

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <ProtectedRoute Route={<Root />} />,
    errorElement: <NotFound />,
    children: [
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
