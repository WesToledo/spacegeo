import React, { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";

import { Page, Grid, Button, Card, GalleryCard } from "tabler-react";

import ModalConfirmAnswer from "./ModalConfirmAnswer";

function QuestionCard({ questionary }) {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  const [questions, setQuestions] = useState(
    questionary.questions.map((question, index) => {
      return {
        _id: question._id,
        num: index + 1,
        title: question.title,
        confirmed: false,
        rightOne: question.rightOne,

        hasObject: question.hasObject,
        objName: question.hasObject && question.objName,
        path: question.hasObject && question.path,

        hasImg: question.hasImg && question.hasImg,
        imgURL: question.imgURL && question.imgURL,

        alternatives: question.alternatives.map(({ _id, text, index }) => {
          return {
            _id,
            enum: text,
            index,
            correct: question.rightOne == index,
            selected: false,
          };
        }),
      };
    })
  );

  const [alreadyAnswered, setAlreadyAnswered] = useState(
    questionary.alreadyAnswered
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmitQuestionary = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    if (alreadyAnswered) {
      setCurrentQuestion(0);
      setQuestions(
        questions.map((question, index) => {
          return {
            ...question,
            alternatives: questionary.alreadyAnswered
              ? question.alternatives.map((alternative) => {
                  return {
                    ...alternative,
                    selected: questionary.answers.find(
                      (answer) => answer.alternative == alternative._id
                    ),
                  };
                })
              : question.alternatives,
            confirmed: true,
          };
        })
      );
    }
  }, [alreadyAnswered]);

  const handleSelected = (e) => {
    const selectedAlternative = e.target.value;

    setQuestions(
      questions.map((question, index) => {
        if (index === currentQuestion) {
          return {
            ...question,
            alternatives: question.alternatives.map((alternative, indexA) => {
              if (indexA == selectedAlternative) {
                return { ...alternative, selected: true };
              } else {
                return { ...alternative, selected: false };
              }
            }),
          };
        } else {
          return question;
        }
      })
    );
  };

  const handleColor = (selected, correct) => {
    if (questions[currentQuestion].confirmed && selected && correct) {
      return "success";
    }

    if (questions[currentQuestion].confirmed && selected && !correct) {
      return "danger";
    }

    if (questions[currentQuestion].confirmed && correct) {
      return "success";
    }

    return selected ? "primary" : "secondary";
  };
  useEffect(() => {
    console.log(questions);
  }, [questions]);


  function goBack() {
    history.push("/questionarios-padrao");
  }

  return (
    <Page.Content title={questionary.title}>
      <Card
        title={questionary.title}
        options={
          <Button icon="skip-back" color="primary" onClick={goBack}>
            Meus Questionários
          </Button>
        }
      >
        <Grid.Row className="justify-content-center">
          <Grid.Col lg={6} md={6} xl={6}>
            <Card
              title={
                questions[currentQuestion].num +
                ". " +
                questions[currentQuestion].title
              }
              options={
                <>
                  {questions[currentQuestion].hasObject && (
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href={`/ra.html?obj=${questions[currentQuestion].objName}`}
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  )}
                </>
              }
              body={
                <>
                  <Button.List>
                    {questions[currentQuestion].alternatives.length > 0
                      ? questions[currentQuestion].alternatives.map(
                          (alternative, index) => (
                            <Button
                              block
                              key={index}
                              color={handleColor(
                                alternative.selected,
                                alternative.correct
                              )}
                              value={index}
                              onClick={handleSelected}
                              disabled={alreadyAnswered}
                              // disabled={questions[currentQuestion].confirmed}
                            >
                              {alternative.enum}
                            </Button>
                          )
                        )
                      : "Carregando..."}
                  </Button.List>

                  {questions[currentQuestion].hasImg ? (
                    <Grid.Row className="row-cards ">
                      <Grid.Col width={2}></Grid.Col>
                      <Grid.Col width={8}>
                        <GalleryCard>
                          <GalleryCard.Image
                            src={questions[currentQuestion].imgURL}
                          />
                        </GalleryCard>
                      </Grid.Col>
                      <Grid.Col width={2}></Grid.Col>
                    </Grid.Row>
                  ) : (
                    <></>
                  )}
                </>
              }
              footer={
                <Grid.Row>
                  <Grid.Col sm={4} className="text-center">
                    {currentQuestion > 0 ? (
                      <Button
                        color="secondary"
                        onClick={handlePreviousQuestion}
                      >
                        Anterior
                      </Button>
                    ) : (
                      <></>
                    )}
                  </Grid.Col>

                  <Grid.Col sm={4} className="text-center">
                    {currentQuestion < questions.length - 1 ? (
                      <Button color="secondary" onClick={handleNextQuestion}>
                        Próxima
                      </Button>
                    ) : (
                      questions.filter(
                        (question) =>
                          question.alternatives.filter(
                            (alternative) => alternative.selected == true
                          ).length > 0
                      ).length == questions.length && (
                        <Grid.Col sm={4} className="text-center">
                          {!alreadyAnswered && (
                            <Button
                              color="primary"
                              onClick={handleSubmitQuestionary}
                            >
                              Terminar Questionário
                            </Button>
                          )}
                        </Grid.Col>
                      )
                    )}
                  </Grid.Col>
                </Grid.Row>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Card>
      <ModalConfirmAnswer
        open={modalOpen}
        setOpen={setModalOpen}
        questions={questions}
        idQuestionary={questionary._id}
        setAlreadyAnswered={setAlreadyAnswered}
        grade={questionary.grade}
      />
    </Page.Content>
  );
}

export default QuestionCard;
