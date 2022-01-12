import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NativeBaseProvider, extendTheme } from "native-base";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    </NativeBaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
