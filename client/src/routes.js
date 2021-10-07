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
import MyQuestionsTeacherPage from "./pages/MyQuestionsTeacher";
import SubMyQuestionsTeacherPage from "./pages/MyQuestionsTeacher/Questions";

//STUDENT PAGES
import MyQuestionsStudentPage from "./pages/MyQuestionsStudent";
import SubMyQuestionsStudentPage from "./pages/MyQuestionsStudent/Questions";

import LoginPage from "~/pages/Login";
import SignUpPage from "~/pages/SignUp";

import TopicosPage from "~/pages/Topicos";

import QuestionPage from "~/pages/Questions";
import SubQuestionPage from "~/pages/Questions/SubQuestionPage";

//level 1
import Studies_GeometriaPosicaoList from "~/pages/Topicos/GeometriaPosicao-1";

//level 2
import Studies_GeometriaPosicao_PosicoesRelativasEntrePontosRetasPlanosNoEspacoList from "~/pages/Topicos/GeometriaPosicao-1/Aula3_1.3";
import Studies_GeometriaPosicao_Aula_1 from "~/pages/Topicos/GeometriaPosicao-1/Aula1_1.1";
import Studies_GeometriaPosicao_Aula_2 from "~/pages/Topicos/GeometriaPosicao-1/Aula2_1.1";

//level 3
import Studies_GeometriaPosicao_PosicaoEntrePlanosNoEspacoList from "~/pages/Topicos/GeometriaPosicao-1/Aula3_1.3/PosicaoEntrePlanosNoEspaco-1.3.4";

//level 4
import Studies_GeometriaPosicao_PlanoPage from "~/pages/Topicos/GeometriaPosicao-1/Aula3_1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PlanoPage";
import Studies_GeometriaPosicao_PosicoesRelativasList from "~/pages/Topicos/GeometriaPosicao-1/Aula3_1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PosicoesRelativas-1.3.4.2";

//level 5
import Studies_GeometriaPosicao_PlanosCoincidentes from "~/pages/Topicos/GeometriaPosicao-1/Aula3_1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PosicoesRelativas-1.3.4.2/PlanosCoincidentesPage";
import Studies_GeometriaPosicao_PlanosConcorrentes from "~/pages/Topicos/GeometriaPosicao-1/Aula3_1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PosicoesRelativas-1.3.4.2/PlanosConcorrentesPage";
import Studies_GeometriaPosicao_PlanosParalelos from "~/pages/Topicos/GeometriaPosicao-1/Aula3_1.3/PosicaoEntrePlanosNoEspaco-1.3.4/PosicoesRelativas-1.3.4.2/PlanosParalelosPage";

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
  const { type } = useStore((state) => state.user);
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

        <PrivateRoute exact path="/topicos" component={TopicosPage} />

        <PrivateRoute exact path="/questionarios" component={QuestionPage} />
        {type == "teacher" ? (
          <PrivateRoute
            exact
            path="/meus-questionarios"
            component={MyQuestionsTeacherPage}
          />
        ) : (
          <PrivateRoute
            exact
            path="/meus-questionarios"
            component={MyQuestionsStudentPage}
          />
        )}
        {type == "teacher" ? (
          <PrivateRoute
            exact
            path="/meus-questionarios/:id"
            component={SubMyQuestionsTeacherPage}
          />
        ) : (
          <PrivateRoute
            exact
            path="/meus-questionarios/:id"
            component={SubMyQuestionsStudentPage}
          />
        )}

        {type == "teacher" ? (
          <PrivateRoute
            exact
            path="/sub-questionarios"
            component={SubQuestionPage}
          />
        ) : (
          <PrivateRoute
            exact
            path="/sub-questionarios"
            component={SubQuestionPage}
          />
        )}

        {/* GEOMETRIA DE POSIÇÃO */}
        {/* LEVEL 1 */}
        {/* 1 */}
        <PrivateRoute
          exact
          path="/topicos/geometria-posicao"
          component={Studies_GeometriaPosicaoList}
        />
        {/* A GEOMETRIA DO ESPAÇO*/}

        {/* 1.1 */}
        <PrivateRoute
          exact
          path="/topicos/geometria-posicao/aula-1"
          component={Studies_GeometriaPosicao_Aula_1}
        />

        {/* PARELELISMO E PERPENDICULARISMO */}
        {/* 1.2 */}
        <PrivateRoute
          exact
          path="/topicos/geometria-posicao/aula-2"
          component={Studies_GeometriaPosicao_Aula_2}
        />

        {/* POSIÇÕES RELATIVAS ENTRE PONTOS RETAS PLANOS NO ESPACO  */}
        {/* 1.3 */}
        <PrivateRoute
          exact
          path="/topicos/geometria-posicao/aula-3"
          component={
            Studies_GeometriaPosicao_PosicoesRelativasEntrePontosRetasPlanosNoEspacoList
          }
        />
        {/* 1.3.4 */}
        <PrivateRoute
          exact
          path="/topicos/geometria-posicao/aula-3/posicao-planos-no-espaco"
          component={Studies_GeometriaPosicao_PosicaoEntrePlanosNoEspacoList}
        />

        {/* 1.3.4.1 */}
        <PrivateRoute
          exact
          path="/topicos/geometria-posicao/aula-3/posicao-planos-no-espaco/plano"
          component={Studies_GeometriaPosicao_PlanoPage}
        />
        {/* 1.3.4.2 */}
        <PrivateRoute
          exact
          path="/topicos/geometria-posicao/aula-3/posicao-planos-no-espaco/posicoes-relativas"
          component={Studies_GeometriaPosicao_PosicoesRelativasList}
        />
        {/* 1.3.4.2.1 */}
        <PrivateRoute
          exact
          path="/topicos/geometria-posicao/aula-3/posicao-planos-no-espaco/posicoes-relativas/planos-coincidentes"
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
          path="/topicos/geometria-posicao/aula-3/posicao-planos-no-espaco/posicoes-relativas/planos-paralelos"
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
