import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Form, Icon, Button, Card, FormToggle } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import useStore from "~/store";
import ModalCreateQuestion from "./NewQuestionModal";
import ModalEditQuestion from "./EditModal";
import ClassesModal from "./ClassesModal";
import Loader from "~/components/Loader";

import ModalConfirmDelete from "./DeleteQuestionModal";

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
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  const [modalCreate, setOpenCreate] = useState(false);
  const [modalEdit, setOpenEdit] = useState(false);
  const [modalClasses, setOpenClasses] = useState(false);

  const [questionary, setQuestionary] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const [openDeleteModal, setOpenDeleteModal] = useState({
    visible: false,
    id: null,
    idQuestionary: null,
  });

  const [publish, setPublish] = useState(false);

  const { _id } = useStore((state) => state.user);
  const { startLoading, isLoading, stopLoading } = useStore();

  async function getQuestionary() {
    startLoading();
    try {
      const response = await api.get("/questionary/" + props.match.params.id);
      console.log(response.data.questionary);
      setQuestionary(response.data.questionary);
      setPublish(response.data.questionary.publish);
      stopLoading();
    } catch (err) {
      console.log(err);
      stopLoading();
    }
  }
  function handleOnCreateNewQuestionClick() {
    setOpenCreate(true);
  }
  function handleOpenClassesModal() {
    setOpenClasses(true);
  }

  async function handleOnDeleteQuestion(id, idQuestionary) {
    try {
      await api.delete(
        "/questionary/question/remove/" + id + "/" + idQuestionary
      );
      getQuestionary();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getQuestionary();
  }, []);

  async function handlePublish(e) {
    const publish = e.target.checked;
    try {
      await api.put("/questionary/publish/" + questionary?._id, {
        publish,
      });
      setPublish(publish);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Wrapper>
      {!isLoading ? (
        <Page.Content title={`Questionário: ${questionary?.title}`}>
          <Card>
            <Card.Header>
              {/* <Card.Options> */}
              {questionary?.type != "default" ? (
                <Grid.Row
                  alignItems="center"
                  justifyContent="flex-end"
                  className="w-100"
                >
                  <Grid.Col md={2} sm={12} className={"m-2"}>
                    <Button
                      block
                      icon="users"
                      color="primary"
                      onClick={handleOpenClassesModal}
                    >
                      Vincular Turmas
                    </Button>
                  </Grid.Col>
                  <Grid.Col md={2} sm={12} className={"m-2"}>
                    <Button
                      block
                      icon="plus"
                      color="success"
                      onClick={handleOnCreateNewQuestionClick}
                    >
                      Criar Questão
                    </Button>
                  </Grid.Col>
                  <Grid.Col>
                    <Form.Switch
                      className={"m-2"}
                      label={
                        publish
                          ? "Questionário Publicado"
                          : "Publicar Questionário"
                      }
                      checked={publish}
                      onChange={handlePublish}
                    />
                  </Grid.Col>
                </Grid.Row>
              ) : (
                <></>
              )}
              {/* </Card.Options> */}
            </Card.Header>
            <Card.Body>
              {questionary?.questions.length == 0 && (
                <p>Nenhuma questão encontrada</p>
              )}
              <Grid.Row cards deck>
                {questionary?.questions?.map((question, indexQuestion) => (
                  <Grid.Col width={width < 768 ? 12 : 6} key={indexQuestion}>
                    <Card>
                      <Card.Header>
                        <Card.Title className="text-area-indent">{`${
                          indexQuestion + 1
                        }) ${question.title}`}</Card.Title>
                        <Card.Options>
                          {question.hasObject && (
                            <Button
                              icon="box"
                              color="primary"
                              RootComponent="a"
                              href={`/ra.html?obj=${question.objName}`}
                              className="text-white"
                            >
                              Ver em RA
                            </Button>
                          )}
                        </Card.Options>
                      </Card.Header>
                      <Card.Body>
                        {question.hasImg && (
                          <Grid.Row
                            alignItems="center"
                            className="mb-8"
                            justifyContent="center"
                            key={indexQuestion}
                          >
                            <Grid.Col width={6}>
                              <img src={question.imgURL} />
                            </Grid.Col>
                          </Grid.Row>
                        )}
                        {question.alternatives.map((alternative, index) => (
                          <Grid.Row
                            alignItems="center"
                            className="mb-2"
                            key={index}
                          >
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
                        {questionary?.type != "default" && (
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
                                setOpenDeleteModal({
                                  id: question._id,
                                  visible: true,
                                  idQuestionary: questionary?._id,
                                });
                              }}
                            />
                          </div>
                        )}
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
                setClose={() => {
                  setOpenEdit(false);
                  setSelectedQuestion(undefined);
                }}
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
            <ModalConfirmDelete
              open={openDeleteModal}
              setOpen={setOpenDeleteModal}
              onSubmit={handleOnDeleteQuestion}
            />
          </Card>
        </Page.Content>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
}

export default QuestionsPage;
