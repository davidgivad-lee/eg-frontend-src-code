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
import ProductDetail from "./pages/Product/ProductDetail";

const App = (props) => {
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
          exact
          path="/catalogos"
          render={() => (
            <MainLayout>
              <Catalog />
            </MainLayout>
          )}
        />
        <Route
          path="/catalogos/:id"
          render={(props) => (
            <MainLayout>
              <ProductDetail {...props} />
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
};

export default App;
