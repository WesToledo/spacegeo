import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "~/services/api";
import useStore from "~/store";

import { Button, Text } from "tabler-react";

export default function ModalConfirmAnswer({
  open,
  setOpen,
  questions,
  idQuestionary,
  setAlreadyAnswered,
  grade,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const { _id, classe } = useStore((state) => state.user);

  async function onSubmit() {
    const gradePerQuestion = grade / questions.length;
    var myGrade = 0;

    questions.forEach((question) => {
      const alternative = question.alternatives.filter(
        (alternative) => alternative.selected
      )[0];
      if (alternative.index == question.rightOne) {
        myGrade += gradePerQuestion;
      }
    });

    try {
      await api.post("/answer/answer", {
        questionary: idQuestionary,
        student: _id,
        classe,
        answers: questions.map((question) => {
          const alternative = question.alternatives.filter(
            (alternative) => alternative.selected
          )[0];
          return {
            question: question._id,
            alternative: alternative._id,
            index: alternative.index,
          };
        }),
        timeBegin: new Date(),
        timeEnd: new Date(),
        grade: myGrade,
      });
      setAlreadyAnswered(true);
      handleClose();
    } catch (err) {
      console.log(err);
      handleClose();
    }
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Revisão das respostas</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Crie um novo questionário, adicione questões, e depois vincule as
            turmas para avaliar seus alunos
          </DialogContentText> */}

          {questions.map(({ title, num, alternatives }) => {
            return (
              <div className="m-2">
                <DialogContentText>
                  <h5 style={{ color: "#495057" }}>{`${num}) ${title}`}</h5>
                </DialogContentText>
                <div style={{ width: "100%" }}>
                  {alternatives
                    .filter((alternative) => alternative.selected)
                    .map((alternative, index) => (
                      <Button block key={index} disabled={true} color="primary">
                        {alternative.enum}
                      </Button>
                    ))}
                </div>
              </div>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button onClick={onSubmit} color="primary">
            Enviar respostas
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
