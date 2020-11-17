import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { isAuthenticated } from "~/services/auth";

import Error404 from "./pages/NotFound/404.react";

import LoginPage from "~/pages/Login";
import SignUpPage from "~/pages/SignUp";

import EstudosPage from "~/pages/Studies";

import QuestionPage from "~/pages/QuestionPage";
import SubQuestionPage from "~/pages/QuestionPage/SubQuestionPage";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/cadastro" component={SignUpPage} />

        <PrivateRoute exact path="/estudos" component={EstudosPage} />

        <PrivateRoute exact path="/questionarios" component={QuestionPage} />
        <PrivateRoute exact path="/sub-questionarios" component={SubQuestionPage} />

        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
