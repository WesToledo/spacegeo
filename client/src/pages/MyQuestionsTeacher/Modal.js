import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "~/services/api";
import useStore from "~/store";
import { Button, Form } from "tabler-react";

export default function FormDialog({ open, setOpen, getQuestionarys }) {
  const handleClose = () => {
    setOpen(false);
  };
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(0);
  const { _id } = useStore((state) => state.user);

  async function onSubmit() {
    try {
      await api.post("/questionary/create", {
        title: name,
        teacher: _id,
        grade: grade,
        type: "teacher",
      });
      handleClose();
      console.log("akhsbdasjkdb");
      getQuestionarys();
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
      >
        <DialogTitle id="form-dialog-title">
          Criar novo questionário
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ao criar um novo questionário, você pode posteriormente
            disponibilizar as suas turmas e avaliar seus alunos, incluindo
            imagens e novos objetos 3D
          </DialogContentText>
          <Form.Input
            autoFocus
            margin="dense"
            id="name"
            label="Título do novo questionário"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            autoFocus
            margin="dense"
            id="grade"
            label="Valor do questionário"
            type="number"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button onClick={onSubmit} color="primary">
            Criar Questionário
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
