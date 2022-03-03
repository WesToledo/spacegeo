import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Button } from "tabler-react";

export default function ModalConfirmDelete({ open, setOpen, onSubmit }) {
  const handleClose = () => {
    setOpen({ visible: false });
  };

  const handleSubmit = () => {
    handleClose();
    onSubmit();
  };

  return (
    <div>
      <Dialog
        open={open.visible}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Excluir turma "{`${open.name}`}"
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja realmente excluir a turma?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="danger" icon="trash">
            Excluir Turma
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
