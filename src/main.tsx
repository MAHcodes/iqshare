import React from "react";
import CustomThemeProvider from "./components/theme";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading.tsx";
import { Container } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <CustomThemeProvider>
          <Container>
            <App />
          </Container>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
