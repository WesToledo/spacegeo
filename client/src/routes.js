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

import GeometriaPosicaoPage from "~/pages/Studies/GeometriaPosicao";
import GeometriaPosicao_PosicoesRelativasPage from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas";
import GeometriaPosicao_PosicaoEntrePlanosNoEspacoPage from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco";
import GeometriaPosicao_PlanoPage from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PlanoPage";
import GeometriaPosicao_PosicoesRelativasPage2 from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas";
import GeometriaPosicao_PlanosCoincidentes from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas/PlanosCoincidentesPage";
import GeometriaPosicao_PlanosConcorrentes from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas/PlanosConcorrentesPage";
import GeometriaPosicao_PlanosParalelos from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas/PlanosParalelosPage";

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
        <PrivateRoute
          exact
          path="/sub-questionarios"
          component={SubQuestionPage}
        />

        {/* GEOMETRIA DE POSIÇÃO */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao"
          component={GeometriaPosicaoPage}
        />
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas"
          component={GeometriaPosicao_PosicoesRelativasPage}
        />
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco"
          component={GeometriaPosicao_PosicaoEntrePlanosNoEspacoPage}
        />

        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/plano"
          component={GeometriaPosicao_PlanoPage}
        />

        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas"
          component={GeometriaPosicao_PosicoesRelativasPage2}
        />

        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas/planos-coincidentes"
          component={GeometriaPosicao_PlanosCoincidentes}
        />
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas/planos-concorrentes"
          component={GeometriaPosicao_PlanosConcorrentes}
        />
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas/planos-paralelos"
          component={GeometriaPosicao_PlanosParalelos}
        />

        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
