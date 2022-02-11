import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Form, Icon, Button, Card, FormToggle } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import useStore from "~/store";
import ModalCreateQuestion from "./NewQuestionModal";
import ModalEditQuestion from "./EditModal";
import ClassesModal from "./ClassesModal";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function QuestionsPage(props) {
  const [modalCreate, setOpenCreate] = useState(true);
  const [modalEdit, setOpenEdit] = useState(false);
  const [modalClasses, setOpenClasses] = useState(false);

  const [publish, setPublish] = useState(false);

  const [questionary, setQuestionary] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const { _id } = useStore((state) => state.user);

  async function getQuestionary() {
    try {
      const response = await api.get("/questionary/" + props.match.params.id);
      console.log(response.data.questionary);
      setQuestionary(response.data.questionary);
    } catch (err) {
      console.log(err);
    }
  }
  function handleOnCreateNewQuestionClick() {
    setOpenCreate(true);
  }
  function handleOpenClassesModal() {
    setOpenClasses(true);
  }
  async function handleOnDeleteQuestion(_id) {
    console.log(_id);
    try {
      await api.delete("/questionary/question/remove/" + _id);
      getQuestionary();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getQuestionary();
  }, []);

  return (
    <Wrapper>
      <Page.Content title={`Questionário: ${questionary?.title}`}>
        <Card>
          <Card.Header>
            <Card.Options>
              <Button.List>
                <Button
                  icon="users"
                  color="primary"
                  onClick={handleOpenClassesModal}
                >
                  Vincular Turmas
                </Button>
                <Button
                  icon="plus"
                  color="success"
                  onClick={handleOnCreateNewQuestionClick}
                >
                  Criar Questão
                </Button>
              </Button.List>

              <Form.Switch className={"m-2"} label="Publicar Questionário" />
            </Card.Options>
          </Card.Header>
          <Card.Body>
            {questionary?.questions.length == 0 && (
              <p>Nenhuma questão encontrada</p>
            )}
            <Grid.Row cards deck>
              {questionary?.questions?.map((question, indexQuestion) => (
                <Grid.Col lg={6} md={12} sm={12} xs={12} key={indexQuestion}>
                  <Card>
                    <Card.Header>
                      <Card.Title>{`${indexQuestion + 1}) ${
                        question.title
                      }`}</Card.Title>
                      <Card.Options></Card.Options>
                    </Card.Header>
                    <Card.Body>
                      {question.alternatives.map((alternative, index) => (
                        <Grid.Row alignItems="center" className="mb-2">
                          <Grid.Col width={2}>
                            <Form.StaticText>{`${letters[index]})`}</Form.StaticText>
                          </Grid.Col>
                          <Grid.Col width={9}>
                            {/* <Form.Input
                      name={alternative.index}
                      placeholder="Digite aqui o texto da alternativa..."
                    /> */}
                            <Form.Textarea
                              disabled={true}
                              name={alternative.index}
                              placeholder="Digite aqui o texto da alternativa..."
                              rows={2}
                              value={alternative.text}
                            />
                          </Grid.Col>
                          <Grid.Col width={1}>
                            <Grid.Row
                              alignItems="center"
                              justifyContent="center"
                            >
                              <div
                                style={{
                                  padding: "12px",
                                }}
                              >
                                <input
                                  className="custom-radio"
                                  type="radio"
                                  checked={
                                    question.rightOne == alternative.index
                                  }
                                  label={"\u00A0"}
                                  name={`example-radios-${indexQuestion}`}
                                  value={alternative.index}
                                  disabled={true}
                                />
                              </div>
                            </Grid.Row>
                          </Grid.Col>
                        </Grid.Row>
                      ))}
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
                          onClick={() => {
                            setSelectedQuestion(question);
                            setOpenEdit(true);
                          }}
                        />
                        <Button
                          className="mx-1"
                          icon="trash"
                          size="sm"
                          color="link"
                          onClick={() => {
                            handleOnDeleteQuestion(question._id);
                          }}
                        />
                      </div>
                    </Card.Footer>
                  </Card>
                </Grid.Col>
              ))}
            </Grid.Row>
          </Card.Body>
          {/* <Card.Footer>This is standard card footer</Card.Footer> */}
          <ModalCreateQuestion
            open={modalCreate}
            setOpen={setOpenCreate}
            getQuestionary={getQuestionary}
            idQuestionary={props.match.params.id}
          />
          {selectedQuestion && (
            <ModalEditQuestion
              open={modalEdit}
              setOpen={setOpenEdit}
              getQuestionary={getQuestionary}
              idQuestionary={props.match.params.id}
              selectedQuestion={selectedQuestion}
            />
          )}
          <ClassesModal
            open={modalClasses}
            setOpen={setOpenClasses}
            idQuestionary={props.match.params.id}
          />
        </Card>
      </Page.Content>
    </Wrapper>
  );
}

export default QuestionsPage;
