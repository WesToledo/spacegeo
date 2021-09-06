import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import useStore from "~/store";

import { isAuthenticated } from "~/services/auth";

import Error404 from "./pages/NotFound/404.react";
import ClassBondStudent from "./pages/ClassBondStudent";

//PROFESSOR PAGES
import ClassesPage from "./pages/Classes";
import StudentsPage from "./pages/Classes/Students";

import LoginPage from "~/pages/Login";
import SignUpPage from "~/pages/SignUp";

import EstudosPage from "~/pages/Studies";

import QuestionPage from "~/pages/Questions";
import SubQuestionPage from "~/pages/Questions/SubQuestionPage";

//level 1
import Studies_GeometriaPosicaoList from "~/pages/Studies/GeometriaPosicao-1";

//level 2
import Studies_GeometriaPosicao_PosicoesRelativasEntrePontosRetasPlanosNoEspacoList from "~/pages/Studies/GeometriaPosicao-1/PosicoesRelativasEntrePontosRetasPlanosNoEspaco-1.3";
import Studies_GeometriaPosicao_A_GeometriaPage from "~/pages/Studies/GeometriaPosicao-1/AGeometria-1.1";
import Studies_PontoRetaPlanoESuasRepresentacoes from "~/pages/Studies/GeometriaPosicao-1/PontoRetaPlanoESuasRepresentacoes-1.2";
//level 3
import Studies_GeometriaPosicao_PosicaoEntrePlanosNoEspacoList from "~/pages/Studies/GeometriaPosicao-1/PosicoesRelativasEntrePontosRetasPlanosNoEspaco-1.3/PosicaoEntrePlanosNoEspaco-1.3.4";

//level 4
import Studies_GeometriaPosicao_PlanoPage from "~/pages/Studies/GeometriaPosicao-1/PosicoesRelativasEntrePontosRetasPlanosNoEspaco-1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PlanoPage";
import Studies_GeometriaPosicao_PosicoesRelativasList from "~/pages/Studies/GeometriaPosicao-1/PosicoesRelativasEntrePontosRetasPlanosNoEspaco-1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PosicoesRelativas-1.3.4.2";

//level 5
import Studies_GeometriaPosicao_PlanosCoincidentes from "~/pages/Studies/GeometriaPosicao-1/PosicoesRelativasEntrePontosRetasPlanosNoEspaco-1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PosicoesRelativas-1.3.4.2/PlanosCoincidentesPage";
import Studies_GeometriaPosicao_PlanosConcorrentes from "~/pages/Studies/GeometriaPosicao-1/PosicoesRelativasEntrePontosRetasPlanosNoEspaco-1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PosicoesRelativas-1.3.4.2/PlanosConcorrentesPage";
import Studies_GeometriaPosicao_PlanosParalelos from "~/pages/Studies/GeometriaPosicao-1/PosicoesRelativasEntrePontosRetasPlanosNoEspaco-1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PosicoesRelativas-1.3.4.2/PlanosParalelosPage";

// QUESTIONS
import Question_GeometriaPosicaoPage from "~/pages/Questions/GeometriaPosicao";
import Question_GeometriaPosicao_PosicoesRelativasPage from "~/pages/Questions/GeometriaPosicao/PosicoesRelativas";
import Question_GeometriaPosicao_PosicaoEntrePlanosNoEspacoPage from "~/pages/Questions/GeometriaPosicao/PosicoesRelativas/PosicaoEntrePlanosNoEspaco";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useStore((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated(token) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/cadastro" component={SignUpPage} />
        <PrivateRoute
          exact
          path="/vincular-turma"
          component={ClassBondStudent}
        />

        {/* PROFESSOR */}
        <PrivateRoute exact path="/turmas" component={ClassesPage} />
        <PrivateRoute exact path="/turmas/:id" component={StudentsPage} />

        <PrivateRoute exact path="/estudos" component={EstudosPage} />

        <PrivateRoute exact path="/questionarios" component={QuestionPage} />
        <PrivateRoute
          exact
          path="/sub-questionarios"
          component={SubQuestionPage}
        />

        {/* GEOMETRIA DE POSIÇÃO */}
        {/* LEVEL 1 */}
        {/* 1 */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao"
          component={Studies_GeometriaPosicaoList}
        />
        {/* A GEOMETRIA */}
        {/* 1.1 */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/a-geometria"
          component={Studies_GeometriaPosicao_A_GeometriaPage}
        />
        {/*  PONTOS RETAS PLANOS  E SUAS REPRESENTACOES */}
        {/* 1.2 */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/pontos-retas-planos-e-suas-representacoes"
          component={Studies_PontoRetaPlanoESuasRepresentacoes}
        />

        {/* POSIÇÕES RELATIVAS ENTRE PONTOS RETAS PLANOS NO ESPACO  */}
        {/* 1.3 */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco"
          component={
            Studies_GeometriaPosicao_PosicoesRelativasEntrePontosRetasPlanosNoEspacoList
          }
        />
        {/* 1.3.4 */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco"
          component={Studies_GeometriaPosicao_PosicaoEntrePlanosNoEspacoList}
        />

        {/* 1.3.4.1 */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco/plano"
          component={Studies_GeometriaPosicao_PlanoPage}
        />
        {/* 1.3.4.2 */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco/posicoes-relativas"
          component={Studies_GeometriaPosicao_PosicoesRelativasList}
        />
        {/* 1.3.4.2.1 */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco/posicoes-relativas/planos-coincidentes"
          component={Studies_GeometriaPosicao_PlanosCoincidentes}
        />
        {/* 1.3.4.2.2 */}
        <PrivateRoute
          exact
          path="planos-concorrentes"
          component={Studies_GeometriaPosicao_PlanosConcorrentes}
        />
        {/* 1.3.4.2.3 */}
        <PrivateRoute
          exact
          path="/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco/posicoes-relativas/planos-paralelos"
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

        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
