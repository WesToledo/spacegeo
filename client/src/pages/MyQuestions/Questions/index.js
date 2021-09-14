import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import useStore from "~/store";
import SimpleDialogDemo from "./Modal";

function QuestionsPage(props) {
  const [open, setOpen] = useState(false);
  const [questionary, setQuestionary] = useState([]);
  const { _id } = useStore((state) => state.user);

  async function getQuestionary() {
    try {
      const response = await api.get("/questionary/" + props.match.params.id);
      console.log(response.data);
      setQuestionary(response.data.questionarys);
    } catch (err) {
      console.log(err);
    }
  }
  function handleOnCreateNewQuestionClick() {
    setOpen(true);
  }

  useEffect(() => {
    getQuestionary();
  }, []);

  return (
    <Wrapper>
      <Page.Content title="Questionários">
        <Card>
          <Card.Header>
            <Card.Options>
              <Button
                icon="plus"
                color="success"
                onClick={handleOnCreateNewQuestionClick}
              >
                Criar Questão
              </Button>
            </Card.Options>
          </Card.Header>
          <Card.Body>
            <Grid.Row cards>
              {questionary?.questions?.map((questions, index) => (
                <Grid.Col xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
                  <Card>
                    <Card.Header>
                      <Card.Title>{questions.title}</Card.Title>
                      <Card.Options></Card.Options>
                    </Card.Header>
                    <Card.Body>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Icon prefix="fe" name="users" className="m-2" />
                        <Text
                          style={{ minWidth: 120, margin: 5 }}
                        >{`Turmas: ${questions.classes.length}`}</Text>
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <Button
                          icon="edit"
                          size="sm"
                          color="primary"
                          onClick={() =>
                            props.history.push(
                              `/meus-questionarios/${questions._id}`
                            )
                          }
                        >
                          Editar questionário
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Grid.Col>
              ))}
            </Grid.Row>
          </Card.Body>
          {/* <Card.Footer>This is standard card footer</Card.Footer> */}
          <SimpleDialogDemo
            open={open}
            setOpen={setOpen}
            getQuestionary={getQuestionary}
          />
        </Card>
      </Page.Content>
    </Wrapper>
  );
}

export default QuestionsPage;
