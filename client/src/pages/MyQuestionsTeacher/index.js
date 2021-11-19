import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import SimpleDialogDemo from "./Modal";
import useStore from "~/store";

function MyQuestionsPage(props) {
  const [open, setOpen] = useState(false);
  const [questionarys, setQuestionarys] = useState([]);
  const { _id } = useStore((state) => state.user);

  function handleOnCreateNewClassClick() {
    setOpen(true);
  }

  async function getQuestionarys() {
    try {
      const response = await api.get("/questionary/list/" + _id);
      console.log(response.data.questionarys);
      setQuestionarys(response.data.questionarys);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getQuestionarys();
  }, []);

  return (
    <Wrapper>
      <Page.Content title="Meus Questionários">
        <Card>
          <Card.Header>
            <Card.Options>
              <Button
                icon="plus"
                color="success"
                onClick={handleOnCreateNewClassClick}
              >
                Criar Questionário
              </Button>
            </Card.Options>
          </Card.Header>
          <Card.Body>
            <Grid.Row cards>
              {questionarys.map((questionary, index) => (
                <Grid.Col xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
                  <Card>
                    <Card.Header>
                      <Card.Title>{questionary.title}</Card.Title>
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
                        >{`Turmas: ${questionary.classes.length}`}</Text>
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
            getQuestionarys={getQuestionarys}
          />
        </Card>
      </Page.Content>
    </Wrapper>
  );
}

export default MyQuestionsPage;
