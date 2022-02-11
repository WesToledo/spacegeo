import React, { useState } from "react";
import { Button, Form } from "tabler-react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "~/services/api";
import useStore from "~/store";

export default function PrivacityTermModal({ open, setOpen, setSentToServer }) {
  const handleClose = () => {
    setOpen(false);
  };
  const { _id } = useStore((state) => state.user);

  async function onSubmit() {
    setOpen(false);
    setSentToServer(true);
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
        <DialogTitle id="form-dialog-title">
          Política de Privacidade do APP
        </DialogTitle>
        <DialogContent>
          {/* <Form.Textarea
            defaultValue=""
            rows={6}
          /> */}
          <iframe
            scrolling="no"
            id="frame"
            style={{ width: "100%", height: "3000px" }}
            src="https://docs.google.com/document/d/e/2PACX-1vRjiit6K5nsDcm77vwnBp69XgrOgmcb0wz3yYE-UcmGSv2BWp5MSmFZDjgoFhe_5g/pub?embedded=true"
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
