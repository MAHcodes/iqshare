import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/404";
import CustomThemeProvider from "./components/theme";
import Root from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  );
}

export default App;
