import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import DataTable from "./Table";

function GradesPage(props) {
  const [answers, setAnswer] = useState([]);
  const history = useHistory();

  async function getAnswers() {
    try {
      const response = await api.get("/user/grades/" + props.match.params.id);
      console.log(response.data.answers);
      setAnswer(response.data.answers);
      // setAnswer(response.data.answers);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAnswers();
  }, []);

  function goBack() {
    history.push("/turmas");
  }

  return (
    <Wrapper>
      {answers.length != 0 ? (
        <Page.Content title={answers[0].student.name}>
          <Card>
            <Card.Header>
              <Card.Options>
                <Button icon="skip-back" color="primary" onClick={goBack}>
                  Voltar
                </Button>
              </Card.Options>
            </Card.Header>
            <Card.Body>{answers && <DataTable answers={answers} />}</Card.Body>
          </Card>
        </Page.Content>
      ) : (
        <Page.Content>
          <Card>
            <Card.Header>
              <Text>
                Esse(a) aluno(a) ainda não respondeu nenhum Questionário!
              </Text>
            </Card.Header>
          </Card>
        </Page.Content>
      )}
    </Wrapper>
  );
}

export default GradesPage;
