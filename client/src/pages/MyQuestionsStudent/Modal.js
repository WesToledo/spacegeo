import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "~/services/api";
import useStore from "~/store";

export default function FormDialog({ open, setOpen, getQuestionarys }) {
  const handleClose = () => {
    setOpen(false);
  };
  const [name, setName] = useState("");
  const { _id } = useStore((state) => state.user);

  async function onSubmit() {
    try {
      await api.post("/questionary/create", {
        title: name,
        teacher: _id,
      });
      handleClose();
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
            Crie um novo questionário, adicione questões, e depois vincule as
            turmas para avaliar seus alunos
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Título do novo questionário"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
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
