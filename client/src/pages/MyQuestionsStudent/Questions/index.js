import React, { useEffect, useReducer, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import { Page, Grid, Button, Card, GalleryCard } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import useStore from "~/store";
import QuestionCard from "./QuestionCard";

function SubQuestionPage(props) {
  const [questionary, setQuestionary] = useState(null);

  async function getQuestionary() {
    try {
      const response = await api.get("/questionary/" + props.match.params.id);
      console.log(response.data.questionary);
      setQuestionary(response.data.questionary);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getQuestionary();
  }, []);

  return (
    <Wrapper>
      <QuestionCard />
    </Wrapper>
  );
}

export default SubQuestionPage;
