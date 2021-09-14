import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Grid, Text } from "tabler-react";

import api from "~/services/api";
import useStore from "~/store";

export default function FormDialog({ open, setOpen, getQuestionarys }) {
  const { _id } = useStore((state) => state.user);

  const [form, setForm] = useState({
    title: null,
    alternatives: [],
    rightOne: null,
    teacher: _id,
  });

  async function onSubmit() {
    try {
      await api.post("/questionary/create", {
        title: form,
        teacher: _id,
      });
      handleClose();
      getQuestionarys();
    } catch (err) {
      console.log(err);
      handleClose();
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">Criar nova questão</DialogTitle>
        <DialogContent>
          <Grid.Col>
            <Grid.Row>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Enunciado da questão"
                type="text"
                fullWidth
                value={form}
                onChange={(e) => setForm(e.target.value)}
              />
            </Grid.Row>
            <Grid.Row>
              <Text>Alternativas</Text>
            </Grid.Row>
          </Grid.Col>
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
