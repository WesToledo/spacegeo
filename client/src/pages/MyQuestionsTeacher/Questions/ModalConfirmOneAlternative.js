import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Button } from "tabler-react";

export default function ModalConfirmOneAlternative({
  open,
  setOpen,
  onSubmit,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    onSubmit("skip");
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Salvar Questão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Você criou apenas uma resposta, salvar assim mesmo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="danger">
            Continuar editando
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Sim, salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
