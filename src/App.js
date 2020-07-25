import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//layouts
import MainLayout from "./layouts/MainLayout";
import LoginLayout from "./layouts/LoginLayout";

//pages
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import Help from "./pages/Help/Help";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/register"
          render={() => (
            <LoginLayout>
              <Register />
            </LoginLayout>
          )}
        />
        <Route
          path="/catalogos"
          render={() => (
            <MainLayout>
              <Catalog />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <LoginLayout>
              <Login />
            </LoginLayout>
          )}
        />
        <Route
          path="/mi-cuenta"
          render={() => (
            <MainLayout>
              <Account />
            </MainLayout>
          )}
        />
        <Route
          path="/ayuda"
          render={() => (
            <MainLayout>
              <Help />
            </MainLayout>
          )}
        />
        <Route
          path="/contacto"
          render={() => (
            <MainLayout>
              <Contact />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Home />
            </MainLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
