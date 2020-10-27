import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//layouts
import MainLayout from "./layouts/MainLayout";
import LoginLayout from "./layouts/LoginLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import DashboardLayout from "./layouts/DashboardLayout";

//pages
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import Help from "./pages/Help/Help";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductDetail from "./pages/Product/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Dashboard from "./pages/Admin/Dashboard";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/admin"
          render={(props) => (
            <DashboardLayout>
              <Dashboard {...props} />
            </DashboardLayout>
          )}
        />
        <Route
          path="/checkout"
          render={(props) => (
            <DefaultLayout>
              <Checkout {...props} />
            </DefaultLayout>
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <LoginLayout>
              <Register {...props} />
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
          render={(props) => (
            <LoginLayout>
              <Login {...props} />
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
          path="/cart/:id?"
          render={(props) => (
            <MainLayout>
              <Cart {...props} />
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
