import React from "react";
import CustomThemeProvider from "./components/theme";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading.tsx";
import { Container } from "@mui/material";
import NotifyProvider from "./context/notify-provider.tsx";
import CustomSnackbar from "./components/Snackbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <CustomThemeProvider>
          <NotifyProvider>
            <Container>
              <CustomSnackbar>
                <App />
              </CustomSnackbar>
            </Container>
          </NotifyProvider>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
