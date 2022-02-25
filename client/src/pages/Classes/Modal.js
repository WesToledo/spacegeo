import React, { useState } from "react";

import { Button } from "tabler-react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "~/services/api";
import useStore from "~/store";

export default function FormDialog({ open, setOpen, getClasses }) {
  const handleClose = () => {
    setOpen(false);
  };
  const [name, setName] = useState("");
  const { _id } = useStore((state) => state.user);

  async function onSubmit() {
    try {
      await api.post("/class/create", {
        name: name,
        teacher: _id,
      });
      handleClose();
      getClasses();
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
      >
        <DialogTitle id="form-dialog-title">Criar nova turma</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Crie uma nova turma no sistema para conseguir criar novos
            questionários e acessar as notas
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome da nova turma"
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
            Criar Turma
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
