import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import SimpleDialogDemo from "./Modal";
import useStore from "~/store";

import ModalConfirmDelete from "./ModalConfirmDelete";

function MyQuestionsPage(props) {
  const [open, setOpen] = useState(false);
  const [questionarys, setQuestionarys] = useState([]);

  const [openDeleteModal, setOpenDeleteModal] = useState({
    visible: false,
    id: null,
    name: "",
  });

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

  async function handleDeleteQuestionary() {
    try {
      await api.delete("/questionary/remove/" + openDeleteModal.id);
      getQuestionarys();
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
                      <Card.Title>
                        <strong>{questionary.title}</strong>
                      </Card.Title>
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
                          <Icon prefix="fe" name="clipboard" className="m-2" />
                          <Text style={{ minWidth: 120, margin: 5 }}>
                            <b>Questões:</b> {questionary.questions.length}
                          </Text>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Icon prefix="fe" name="file-minus" className="m-2" />
                          <Text style={{ minWidth: 120, margin: 5 }}>
                            <b>Valor:</b> {questionary.grade.toFixed(2)}
                          </Text>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Icon prefix="fe" name="users" className="m-2" />
                          <Text style={{ minWidth: 120, margin: 5 }}>
                            <b>Turmas:</b>
                            {questionary.classes.length > 0
                              ? questionary.classes
                                  .map((classe) => classe.name)
                                  .join(", ")
                              : "Nenhuma turma vinculada"}
                          </Text>
                        </div>
                      </div>
                    </Card.Body>
                    {/* <Card.Body>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "colunm",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Icon prefix="fe" name="clipboard" className="m-2" />
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
                          <Icon prefix="fe" name="file-minus" className="m-2" />
                          <Text
                            style={{ minWidth: 120, margin: 5 }}
                          >{`Valor: ${questionary.grade.toFixed(2)}`}</Text>
                        </div>
                        <Icon prefix="fe" name="users" className="m-2" />
                        <Text
                          style={{ minWidth: 120, margin: 5 }}
                        >{`Turmas: ${questionary.classes
                          .map((classe) => classe.name)
                          .join(", ")}`}</Text>
                      </div>
                    </Card.Body> */}
                    <Card.Footer>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <Button
                          className="m-1"
                          icon="edit"
                          size="sm"
                          color="primary"
                          onClick={() =>
                            props.history.push(
                              `/meus-questionarios/${questionary._id}`
                            )
                          }
                        />

                        <Button
                          className="m-1"
                          icon="trash"
                          size="sm"
                          color="danger"
                          onClick={() => {
                            setOpenDeleteModal({
                              visible: true,
                              id: questionary._id,
                              title: questionary.title,
                            });
                          }}
                        />
                      </div>
                    </Card.Footer>
                  </Card>
                </Grid.Col>
              ))}
              {questionarys.length == 0 && (
                <Text className="m-3">Nenhum questionário encontrado</Text>
              )}
            </Grid.Row>
          </Card.Body>
          {/* <Card.Footer>This is standard card footer</Card.Footer> */}
          <SimpleDialogDemo
            open={open}
            setOpen={setOpen}
            getQuestionarys={getQuestionarys}
          />
          <ModalConfirmDelete
            open={openDeleteModal}
            setOpen={setOpenDeleteModal}
            onSubmit={handleDeleteQuestionary}
          />
        </Card>
      </Page.Content>
    </Wrapper>
  );
}

export default MyQuestionsPage;
