import React, { useEffect, useState } from "react";
import { Button, Form } from "tabler-react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "~/services/api";
import useStore from "~/store";

export default function ModalAcceptTerms({ open, setOpen, openNextModal }) {
  const handleClose = () => {
    setOpen(false);
  };

  function onSubmit() {
    setOpen(false);
    openNextModal();
  }

  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        maxWidth="md"
        scroll="body"
      >
        <DialogTitle id="form-dialog-title">Termos de Uso do APP</DialogTitle>
        <DialogContent>
          <iframe
            scrolling="no"
            id="frame"
            style={{ width: "100%", height: "3000px" }}
            src="https://docs.google.com/document/d/e/2PACX-1vSK7kM1QTr8GMKBGiTENGgrioLk9jcuz9B9sS_tbwKjIWj4NZJqAEDo5l_7-Hzu9g/pub?embedded=true"
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button onClick={onSubmit} color="primary">
            Aceitar e continuar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
