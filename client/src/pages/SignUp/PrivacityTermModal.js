import React, { useEffect, useRef } from "react";
import { Button, Form } from "tabler-react";
import { makeStyles } from "@material-ui/core/styles";

import IframeResizer from "iframe-resizer-react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  theme: {
    [theme.breakpoints.up("md")]: {
      height: "2000px",
    },
    [theme.breakpoints.down("md")]: {
      height: "2500px",
    },
  },
}));

export default function ModalAcceptTerms({ open, setOpen, handleSubmit }) {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  function onSubmit() {
    handleSubmit();
    setOpen(false);
  }

  const iframeRef = useRef(null);

  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        scroll="body"
      >
        <DialogTitle>Termos de Uso do APP</DialogTitle>
        <DialogContent>
          <IframeResizer
            forwardRef={iframeRef}
            heightCalculationMethod="bodyOffset"
            inPageLinks
            log
            scrolling="yes"
            src={process.env.REACT_APP_URL + "/POLITICA_PRIVACIDADE.html"}
            style={{ width: "1px", minWidth: "100%" }}
            className={classes.theme}
          />
          {/* <iframe
            conten
            scrolling="no"
            width="100%"
            height="3000px"
            src="https://docs.google.com/document/d/e/2PACX-1vSK7kM1QTr8GMKBGiTENGgrioLk9jcuz9B9sS_tbwKjIWj4NZJqAEDo5l_7-Hzu9g/pub?embedded=true"
          ></iframe> */}
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
