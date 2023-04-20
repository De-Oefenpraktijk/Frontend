import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="oefenpraktijk.eu.auth0.com"
      clientId="NxfCO50lGG6Vc0jfJJFTd9OodstbIvSU"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "http://localhost:5137",
        // scope: "create:public-rooms"
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
