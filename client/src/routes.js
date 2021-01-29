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

import QuestionPage from "~/pages/Questions";
import SubQuestionPage from "~/pages/Questions/SubQuestionPage";

import Studies_GeometriaPosicaoPage from "~/pages/Studies/GeometriaPosicao";
import Studies_GeometriaPosicao_PosicoesRelativasPage from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas";
import Studies_GeometriaPosicao_PosicaoEntrePlanosNoEspacoPage from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco";
import Studies_GeometriaPosicao_PlanoPage from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PlanoPage";
import Studies_GeometriaPosicao_PosicoesRelativasPage2 from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas";
import Studies_GeometriaPosicao_PlanosCoincidentes from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas/PlanosCoincidentesPage";
import Studies_GeometriaPosicao_PlanosConcorrentes from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas/PlanosConcorrentesPage";
import Studies_GeometriaPosicao_PlanosParalelos from "~/pages/Studies/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas/PlanosParalelosPage";

import Question_GeometriaPosicaoPage from "~/pages/Questions/GeometriaPosicao";
import Question_GeometriaPosicao_PosicoesRelativasPage from "~/pages/Questions/GeometriaPosicao/PosicoesRelativas";
import Question_GeometriaPosicao_PosicaoEntrePlanosNoEspacoPage from "~/pages/Questions/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco";
import Question_GeometriaPosicao_PlanoPage from "~/pages/Questions/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PlanoPage";
import Question_GeometriaPosicao_PosicoesRelativasPage2 from "~/pages/Questions/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas";
import Question_GeometriaPosicao_PlanosCoincidentes from "~/pages/Questions/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas/PlanosCoincidentesPage";
import Question_GeometriaPosicao_PlanosConcorrentes from "~/pages/Questions/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas/PlanosConcorrentesPage";
import Question_GeometriaPosicao_PlanosParalelos from "~/pages/Questions/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco/PosicoesRelativas/PlanosParalelosPage";

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
          component={Studies_GeometriaPosicaoPage}
        />
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas"
          component={Studies_GeometriaPosicao_PosicoesRelativasPage}
        />
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco"
          component={Studies_GeometriaPosicao_PosicaoEntrePlanosNoEspacoPage}
        />

        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/plano"
          component={Studies_GeometriaPosicao_PlanoPage}
        />

        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas"
          component={Studies_GeometriaPosicao_PosicoesRelativasPage2}
        />

        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas/planos-coincidentes"
          component={Studies_GeometriaPosicao_PlanosCoincidentes}
        />
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas/planos-concorrentes"
          component={Studies_GeometriaPosicao_PlanosConcorrentes}
        />
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas/planos-paralelos"
          component={Studies_GeometriaPosicao_PlanosParalelos}
        />

        {/* QUESTION */}
        {/* GEOMETRIA DE POSIÇÃO */}
        <PrivateRoute
          exact
          path="/questionarios/geometria-posicao"
          component={Question_GeometriaPosicaoPage}
        />
        <PrivateRoute
          exact
          path="/questionarios/geometria-posicao/posicoes-relativas"
          component={Question_GeometriaPosicao_PosicoesRelativasPage}
        />
        <PrivateRoute
          exact
          path="/questionarios/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco"
          component={Question_GeometriaPosicao_PosicaoEntrePlanosNoEspacoPage}
        />

        <PrivateRoute
          exact
          path="/questionarios/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/plano"
          component={Question_GeometriaPosicao_PlanoPage}
        />

        <PrivateRoute
          exact
          path="/questionarios/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas"
          component={Question_GeometriaPosicao_PosicoesRelativasPage2}
        />

        <PrivateRoute
          exact
          path="/questionarios/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas/planos-coincidentes"
          component={Question_GeometriaPosicao_PlanosCoincidentes}
        />
        <PrivateRoute
          exact
          path="/questionarios/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas/planos-concorrentes"
          component={Question_GeometriaPosicao_PlanosConcorrentes}
        />
        <PrivateRoute
          exact
          path="/questionarios/geometria-posicao/posicoes-relativas/posicao-planos-no-espaco/posicoes-relativas/planos-paralelos"
          component={Question_GeometriaPosicao_PlanosParalelos}
        />

        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
