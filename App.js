import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./stylesheet/common.scss";
import "./stylesheet/normalize.css";
import wordpressBest from "./blog/wordpress_is_best_platform_for_blogging";
import StartSellingOnAmazon from "./blog/steps_to_get_started_with_amazon_india_in_2021";
import RegisterOnAmazon from "./blog/amazon_registration";
import "react-multi-carousel/lib/styles.css";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>

            <Route exact path='/blog' component={Blog}></Route>
            <Route
              exact
              path='/first-blogPost'
              component={wordpressBest}
            ></Route>
            <Route
              exact
              path='/4-steps-to-get-your-first-sell-on-amazon-India-in-2021'
              component={StartSellingOnAmazon}
            ></Route>
            <Route
              exact
              path='/how-to-register-your-business-on-amazon-india-in-2021'
              component={RegisterOnAmazon}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
