import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import About from "./screens/About";
import Nav from "./components/Nav";
import Shop from "./screens/Shop";
import Home from "./screens/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
