import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/404";
import Root from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./routes/signin";
import * as ROUTES from "./routes/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <ProtectedRoute Route={<Root />} />,
    errorElement: <NotFound />,
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
