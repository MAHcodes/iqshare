import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/404";
import Root from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./routes/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute Route={<Root />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
