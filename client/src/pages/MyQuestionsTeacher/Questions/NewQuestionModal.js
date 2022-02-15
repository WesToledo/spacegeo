import React, { useCallback, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControlLabel, Switch } from "@material-ui/core";
import Dropzone, { useDropzone } from "react-dropzone";

import AddIcon from "@material-ui/icons/Add";
import { OBJModel } from "react-3d-viewer";
import { DAEModel, DirectionLight } from "react-3d-viewer";

import DeleteIcon from "@material-ui/icons/Delete";

import { Grid, Text, Form, Button } from "tabler-react";

import api from "~/services/api";
import useStore from "~/store";
import List3DCards from "./List3DCards";

// const obj = require("../../../assets/models/")

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const objects = [
  { img: "1-1reta.bmp", obj: "ob1.1_reta.wrl" },
  { img: "1-1plano.bmp", obj: "ob1.1_plano.wrl" },
  { img: "1-2distintas.bmp", obj: "ob1.2_paralelas_distintas.wrl" },
  { img: "1-2coincidentes.bmp", obj: "ob1.2_paralelas_coincidentes.wrl" },
  { img: "1-2concorrentes.bmp", obj: "ob1.2_concorrentes.wrl" },
  { img: "1-2reversas.bmp", obj: "ob1.2_reversas.wrl" },
  {
    img: "1-3perpendiculares.bmp",
    obj: "ob1.3_retas_perpendiculares.wrl",
  },
  { img: "1-4ortogonais.bmp", obj: "ob1.4_retas_ortogonais.wrl" },
  { img: "1-5.bmp", obj: "ob1.5_retas_obliquas.wrl" },
  // 2
  {
    img: "2-1reta-secante-ao-plano.bmp",
    obj: "ob2.1_reta_secante_ao_plano.wrl",
  },
  {
    img: "2-1reta-contida-no-plano.bmp",
    obj: "ob2.1_reta_contida_no_plano.wrl",
  },
  {
    img: "2-1reta-paralela-ao-plano.bmp",
    obj: "ob2.1_reta_paralela_ao_plano.wrl",
  },
  { img: "2-2secantes.bmp", obj: "ob2.2_secantes.wrl" },
  { img: "2-2paralelos.bmp", obj: "ob2.2_paralelos_distintos.wrl" },
  { img: "2-2coincidentes.bmp", obj: "ob2.2_paralelos_coincidentes.wrl" },
  { img: "2-3.bmp", obj: "ob2.3_reta_e_plano_perpendiculares.wrl" },
  { img: "2-4.bmp", obj: "ob2.4_planos_perpendiculares.wrl" },
];

export default function NewQuestionModal({
  open,
  setOpen,
  getQuestionary,
  idQuestionary,
}) {
  const [selected, setSelected] = useState(null);
  const { _id } = useStore((state) => state.user);
  const [alternatives, setAlternatives] = useState([
    {
      text: "",
      index: 1,
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    rightOne: 1,
    teacher: _id,
  });

  const [hasObj, setHasObj] = useState(false);
  const [hasImg, setHasImg] = useState(false);

  const addNewAlternative = () => {
    setAlternatives([
      ...alternatives,
      {
        text: "",
        index: alternatives.length + 1,
      },
    ]);
  };

  const handleOnChangeTextAlternative = (e) => {
    const { name, value } = e.target;

    const newAlternatives = alternatives.map((alternative) => {
      if (alternative.index == name) {
        return {
          index: alternative.index,
          text: value,
        };
      } else {
        return alternative;
      }
    });

    setAlternatives(newAlternatives);
  };

  const handleDeleteAlternative = (index) => {
    const NewAlternatives = alternatives.filter(
      (alternative) => alternative.index != index
    );

    console.log(index, NewAlternatives);

    setAlternatives(
      NewAlternatives.map((alternative, index) => {
        return {
          text: alternative.text,
          index: index + 1,
        };
      })
    );
  };

  const handleOnChangeRadio = (index) => {
    setForm({
      ...form,
      rightOne: index,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function onSubmit() {
    try {
      await api.post("/questionary/question/add", {
        title: form.title,
        teacher: _id,
        questionary: idQuestionary,
        alternatives: alternatives,
        rightOne: form.rightOne,
        hasObject: selected != null,
        path: "none",
        objName: selected.obj,
      });
      handleClose();
      getQuestionary();
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
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">Criar nova questão</DialogTitle>
        <DialogContent>
          <Grid.Row>
            <Grid.Col width={12}>
              <Form.Group
                label={
                  <Form.Label aside={`${form.title.length}/200`}>
                    Enunciado da questão
                  </Form.Label>
                }
              >
                <Form.Textarea
                  name="title"
                  placeholder="Digite aqui o enunciado..."
                  rows={4}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      title: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Grid.Row
                alignItems="center"
                justifyContent="between"
                className="mb-2"
              >
                <Grid.Col width={8}>
                  {/* <Form.Group label="Alternativas"></Form.Group> */}

                  <Form.StaticText>Alternativas</Form.StaticText>
                </Grid.Col>
                <Grid.Col width={4}>
                  {/* <IconButton color="primary">
                    <AddIcon />
                  </IconButton> */}
                  <Button
                    color="primary"
                    icon="plus"
                    onClick={addNewAlternative}
                  >
                    Adicionar alternativa
                  </Button>
                </Grid.Col>
              </Grid.Row>
              {alternatives.map((alternative, index) => (
                <Grid.Row alignItems="center" className="mb-2">
                  <Grid.Col width={1}>
                    <Form.StaticText>{`${letters[index]})`}</Form.StaticText>
                  </Grid.Col>
                  <Grid.Col width={9}>
                    {/* <Form.Input
                      name={alternative.index}
                      placeholder="Digite aqui o texto da alternativa..."
                    /> */}
                    <Form.Textarea
                      name={alternative.index}
                      placeholder="Digite aqui o texto da alternativa..."
                      rows={2}
                      onChange={handleOnChangeTextAlternative}
                      value={alternative.text}
                    />
                  </Grid.Col>
                  <Grid.Col width={1}>
                    <Grid.Row alignItems="center" justifyContent="center">
                      <div
                        style={{
                          padding: "12px",
                        }}
                      >
                        <input
                          className="custom-radio"
                          type="radio"
                          checked={form.rightOne == alternative.index}
                          onChange={() =>
                            handleOnChangeRadio(alternative.index)
                          }
                          label={"\u00A0"}
                          name="example-radios"
                          value={alternative.index}
                        />
                      </div>
                    </Grid.Row>
                  </Grid.Col>
                  <Grid.Col width={1}>
                    <Grid.Row alignItems="center" justifyContent="center">
                      <IconButton
                        onClick={() =>
                          handleDeleteAlternative(alternative.index)
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid.Row>
                  </Grid.Col>
                </Grid.Row>
              ))}
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col>
              <FormControlLabel
                control={
                  <Switch
                    value={hasObj}
                    onChange={(e) => setHasObj(e.target.checked)}
                  />
                }
                label="Vincular objeto 3D a questão ? "
              />
            </Grid.Col>
          </Grid.Row>

          {/* OBJECTS */}
          {hasObj && (
            <div className={"justify-content-between"}>
              <List3DCards
                objects={objects}
                setSelected={setSelected}
                selected={selected}
              />
            </div>
          )}

          <Grid.Row>
            <Grid.Col>
              <>
                <FormControlLabel
                  control={
                    <Switch
                      value={hasImg}
                      onChange={(e) => setHasImg(e.target.checked)}
                      color="default"
                    />
                  }
                  label="Vincular imagem a questão ? "
                />

                {hasImg && (
                  <Dropzone
                    onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>
                            Drag 'n' drop some files here, or click to select
                            files
                          </p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                )}
              </>
            </Grid.Col>
          </Grid.Row>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" icon="x">
            Cancelar
          </Button>
          <Button onClick={onSubmit} color="primary" icon="save">
            Criar Questão
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
