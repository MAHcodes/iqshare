import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/404";
import Root from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./routes/signup";
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
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
