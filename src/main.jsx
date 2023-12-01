import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import UserProvider from "@/context/userContext";
import CheckUser from "@/pages/check";
import "@/assets/style/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <UserProvider>
            <CheckUser />
        </UserProvider>
    </BrowserRouter>
);
