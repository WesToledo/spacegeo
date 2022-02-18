import React, { useEffect, useReducer, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import { Page, Grid, Button, Card, GalleryCard } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function SubQuestionPage() {
  const [questions, setQuestions] = useState([
    {
      num: 1,
      question: "Dois planos (α e β) são paralelos se α e β:",
      confirmed: false,
      alternatives: [
        {
          enum: "Não tem ponto em comum",
          correct: true,
          selected: false,
        },
        {
          enum: "Apresentam um ponto em comum",
          correct: false,
          selected: false,
        },
        {
          enum: "Apresentam infinitos pontos em comum",
          correct: false,
          selected: false,
        },
        {
          enum: "Apresentam 2 pontos em comum",
          correct: false,
          selected: false,
        },
      ],
      hasImg: false,
      imgURL: "",
    },
    {
      num: 2,
      question: "Observando o cubo, quais são os pares de planos paralelos?",
      confirmed: false,
      alternatives: [
        {
          enum: "ABC e ADG, ABE e CDG, GHE e ABE",
          correct: false,
          selected: false,
        },
        {
          enum: "ABC e ADG, GHE e ABE, ABE e CDG",
          correct: false,
          selected: false,
        },
        {
          enum: "ABC e EFG, ABE e CDG, ADG e BCF",
          correct: true,
          selected: false,
        },
        {
          enum: "Não existem pares de planos paralelos",
          correct: false,
          selected: false,
        },
      ],
      hasImg: true,
      imgURL: "/assets/img/questions/cubo.jpg",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [alternatives, setAlternatives] = useState([]);

  useEffect(() => {
    setAlternatives(questions[currentQuestion].alternatives);
  }, [currentQuestion]);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleAnswer = () => {
    setQuestions(
      questions.map((question, index) => {
        if (index === currentQuestion) {
          return {
            ...question,
            confirmed: true,
          };
        } else {
          return question;
        }
      })
    );
  };

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

    return selected ? "primary" : "secondary";
  };
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <Wrapper>
      <Page.Content title="Questionário">
        <Grid.Row className="justify-content-center">
          <Grid.Col lg={6} md={6} xl={6}>
            <Card
              title={
                questions[currentQuestion].num +
                ". " +
                questions[currentQuestion].question
              }
              options={
                <>
                  <Button
                    icon="box"
                    color="primary"
                    RootComponent="a"
                    href="/ar.html"
                    className="text-white"
                  >
                    Ver em RA
                  </Button>
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
                              disabled={questions[currentQuestion].confirmed}
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
                    <Button
                      color="primary"
                      onClick={handleAnswer}
                      disabled={questions[currentQuestion].confirmed}
                    >
                      Confirmar alternativa
                    </Button>
                  </Grid.Col>

                  <Grid.Col sm={4} className="text-center">
                    {currentQuestion < questions.length - 1 ? (
                      <Button color="secondary" onClick={handleNextQuestion}>
                        Próxima
                      </Button>
                    ) : (
                      <></>
                    )}
                  </Grid.Col>
                </Grid.Row>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </Wrapper>
  );
}

export default SubQuestionPage;
