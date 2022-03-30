import React, { useEffect, useReducer, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { useHistory } from "react-router-dom";

import { Page, Grid, Button, Card, GalleryCard } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import useStore from "~/store";
import QuestionList from "./QuestionsList";

function SubQuestionPage(props) {
  const [questionary, setQuestionary] = useState(null);
  const { _id } = useStore((state) => state.user);
  const history = useHistory();

  async function getQuestionary() {
    try {
      const response = await api.get(
        "/questionary/" + props.match.params.id + "/" + _id
      );
      console.log(response.data.questionary);
      setQuestionary(response.data.questionary);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getQuestionary();
  }, []);

  function goBack() {
    history.push("/questionarios-padrao");
  }

  return (
    <Wrapper>
      {questionary && <QuestionList questionary={questionary} />}
    </Wrapper>
  );
}

export default SubQuestionPage;
