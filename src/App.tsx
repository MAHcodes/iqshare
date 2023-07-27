import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/404";
import Root from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./routes/signin";
import * as ROUTES from "./routes/routes";
import Write from "./routes/write";
import Settings from "./routes/settings";
import Profile from "./routes/profile";

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
    element: <SignIn />,
  },
  {
    path: ROUTES.SIGNIN,
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
