import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import DataTable from "./Table";

function GradesPage(props) {
  const [answers, setAnswer] = useState(null);

  async function getAnswers() {
    try {
      const response = await api.get("/user/grades/" + props.match.params.id);
      console.log(response.data.answers)
      setAnswer(response.data.answers);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAnswers();
  }, []);

  return (
    <Wrapper>
      {answers != null && (
        <Page.Content title={answers[0].student.name}>
          <Card>
            {/* <Card.Header>
            <Card.Options></Card.Options>
          </Card.Header> */}
            <Card.Body>
              {answers && <DataTable answers={answers} />}
            </Card.Body>
            {/* <Card.Footer>This is standard card footer</Card.Footer> */}
          </Card>
        </Page.Content>
      )}
    </Wrapper>
  );
}

export default GradesPage;
