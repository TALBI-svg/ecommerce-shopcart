import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root=ReactDOM.createRoot(document.querySelector("#router"))
root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)