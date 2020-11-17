import React, { useEffect, useReducer, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import { Page, Grid, Table, BlogCard, Button, Card, Form } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function SubQuestionPage() {
  const [questions, setQuestions] = useState([
    {
      num: 1,
      question: "Quantas faces tem um dodecaedro ?",
      confirmed: false,
      alternatives: [
        {
          enum: "12",
          correct: true,
          selected: false,
        },
        {
          enum: "14",
          correct: false,
          selected: false,
        },
        {
          enum: "22",
          correct: false,
          selected: false,
        },
        {
          enum: "34",
          correct: false,
          selected: false,
        },
      ],
    },
    {
      num: 2,
      question: "Quantas arestas tem um dodecaedro?",
      confirmed: false,
      alternatives: [
        {
          enum: "12",
          correct: false,
          selected: false,
        },
        {
          enum: "14",
          correct: false,
          selected: false,
        },
        {
          enum: "30",
          correct: true,
          selected: false,
        },
        {
          enum: "34",
          correct: false,
          selected: false,
        },
      ],
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
      <Page.Content title="Questionários">
        <Grid.Row className="justify-content-center">
          <Grid.Col lg={6} md={6} xl={6}>
            <Card
              title={
                questions[currentQuestion].num +
                " - " +
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
