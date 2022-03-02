import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import DataTable from "./Table";

function GradesPage(props) {
  const [answers, setAnswer] = useState([]);

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

  // const today = new Date();
  // const endDate = new Date(startDate.setDate(startDate.getDate() + 7));
  // const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
  // const hours = parseInt((Math.abs(endDate - today) / (1000 * 60 * 60)) % 24);
  // const minutes = parseInt(
  //   (Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60
  // );
  // const seconds = parseInt(
  //   (Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60
  // );

  useEffect(() => {
    getAnswers();
  }, []);

  return (
    <Wrapper>
      {answers.length != 0 ? (
        <Page.Content title={answers[0].student.name}>
          <Card>
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
