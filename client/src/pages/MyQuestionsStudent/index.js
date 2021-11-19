import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Text, Icon, Dimmer, Card, Button } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import useStore from "~/store";

function MyQuestionsPage(props) {
  const [loading, setLoading] = useState(false);

  const [questionarys, setQuestionarys] = useState([]);
  const { _id, classe } = useStore((state) => state.user);

  async function getQuestionarys() {
    setLoading(true);
    try {
      const response = await api.get(
        "/questionary/student/list/" + classe + "/" + _id
      );
      console.log(response.data.questionarys);
      setQuestionarys(response.data.questionarys);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(null);
    }
  }

  useEffect(() => {
    getQuestionarys();
  }, []);

  return (
    <Wrapper>
      <Page.Content title="Meus Questionários">
        <Card>
          {/* <Card.Header>
            <Card.Options>
              <Button
                icon="plus"
                color="success"
                onClick={handleOnCreateNewClassClick}
              >
                Criar Questionário
              </Button>
            </Card.Options>
          </Card.Header> */}
          <Card.Body>
            <Dimmer active={loading} loader>
              <Grid.Row cards>
                {questionarys.map((questionary, index) => (
                  <Grid.Col xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
                    <Card
                      statusColor={questionary.alreadyAnswered ? "" : "blue"}
                    >
                      <Card.Header>
                        <Card.Title>{questionary.title}</Card.Title>
                        <Card.Options></Card.Options>
                      </Card.Header>
                      <Card.Body>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                            }}
                          >
                            <Icon
                              prefix="fe"
                              name="clipboard"
                              className="m-2"
                            />
                            <Text
                              style={{ minWidth: 120, margin: 5 }}
                            >{`Questões: ${questionary.questions.length}`}</Text>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                            }}
                          >
                            <Icon
                              prefix="fe"
                              name="file-minus"
                              className="m-2"
                            />
                            <Text
                              style={{ minWidth: 120, margin: 5 }}
                            >{`Valor: ${questionary.grade}`}</Text>
                          </div>
                          {questionary.alreadyAnswered && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              <Icon prefix="fe" name="tag" className="m-2" />
                              <Text
                                style={{ minWidth: 120, margin: 5 }}
                              >{`Minha nota: ${questionary.myGrade}`}</Text>
                            </div>
                          )}
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
                                `/meus-questionarios/${questionary._id}`
                              )
                            }
                          >
                            {questionary.alreadyAnswered
                              ? "Ver respostas"
                              : "Responder Questionário"}
                          </Button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid.Row>
              {questionarys.length == 0 && (
                <Text>Nenhum questionário encontrado</Text>
              )}
            </Dimmer>
          </Card.Body>
          {/* <Card.Footer>This is standard card footer</Card.Footer> */}
        </Card>
      </Page.Content>
    </Wrapper>
  );
}

export default MyQuestionsPage;
