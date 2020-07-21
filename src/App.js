import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import Help from "./pages/Help/Help";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/catalogos" component={Catalog} />
        <Route path="/mi-cuenta" component={Account} />
        <Route path="/ayuda" component={Help} />
        <Route path="/contacto" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
