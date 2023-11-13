import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import "./App.css";

import Navbar01 from "./shared/00_Navbar01";
import Footer01 from "./shared/99_Footer01";
import ScrollToTop01 from "./shared/component/ScrollToTop01";
import LandingPage01 from "./pages/LandingPage/LandingPage01";
import LandingPage02 from "./pages/LandingPage/LandingPage02";
import LandingPage03 from "./pages/LandingPage/LandingPage03";
import PostList01 from "./pages/Blog_PostsListPage/PostList01";
import Post01 from "./pages/Blog_PostPage/Post01";
import Login01 from "./pages/LoginPage/Login01";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar01 />
      <div id="back-to-top-anchor" />
      <ScrollToTop01 />
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage01} />
          <Route exact path="/2" component={LandingPage02} />
          <Route exact path="/3" component={LandingPage03} />
          <Route exact path="/blog" component={PostList01} />
          <Route path="/blog/post/:id" component={Post01} />
          <Route exact path="/login" component={Login01} />
        </Switch>
      </main>
      <Footer01 />
    </React.Fragment>
  );
};

export default App;
