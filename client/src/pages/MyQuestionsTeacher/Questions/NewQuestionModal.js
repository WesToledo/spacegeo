import React, { useCallback, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControlLabel, Switch } from "@material-ui/core";

import Dropzone from "./DropZone";

import DeleteIcon from "@material-ui/icons/Delete";
import ModalConfirmOneAlternative from "./ModalConfirmOneAlternative";

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
  { img: "1-1reta.bmp", obj: "ob1.1_reta" },
  { img: "1-1plano.bmp", obj: "ob1.1_plano" },
  { img: "1-2distintas.bmp", obj: "ob1.2_paralelas_distintas" },
  { img: "1-2coincidentes.bmp", obj: "ob1.2_paralelas_coincidentes" },
  { img: "1-2concorrentes.bmp", obj: "ob1.2_concorrentes" },
  { img: "1-2reversas.bmp", obj: "ob1.2_reversas" },
  {
    img: "1-3perpendiculares.bmp",
    obj: "ob1.3_retas_perpendiculares",
  },
  { img: "1-4ortogonais.bmp", obj: "ob1.4_retas_ortogonais" },
  { img: "1-5.bmp", obj: "ob1.5_retas_obliquas" },
  // 2
  {
    img: "2-1reta-secante-ao-plano.bmp",
    obj: "ob2.1_reta_secante_ao_plano",
  },
  {
    img: "2-1reta-contida-no-plano.bmp",
    obj: "ob2.1_reta_contida_no_plano",
  },
  {
    img: "2-1reta-paralela-ao-plano.bmp",
    obj: "ob2.1_reta_paralela_ao_plano",
  },
  { img: "2-2secantes.bmp", obj: "ob2.2_secantes" },
  { img: "2-2paralelos.bmp", obj: "ob2.2_paralelos_distintos" },
  { img: "2-2coincidentes.bmp", obj: "ob2.2_paralelos_coincidentes" },
  { img: "2-3.bmp", obj: "ob2.3_reta_e_plano_perpendiculares" },
  { img: "2-4.bmp", obj: "ob2.4_planos_perpendiculares" },
];

export default function NewQuestionModal({
  open,
  setOpen,
  getQuestionary,
  idQuestionary,
}) {
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

  const [hasObject, setHasObject] = useState(false);
  const [hasImg, setHasImg] = useState(false);

  const [selected3DObject, setSelected3DObject] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!hasObject) {
      setSelected3DObject(null);
    }
  }, [hasObject]);

  useEffect(() => {
    if (!hasImg) {
      setSelectedImg(null);
    }
  }, [hasImg]);

  const addNewAlternative = () => {
    setAlternatives([
      ...alternatives,
      {
        text: "",
        index: alternatives.length + 1,
      },
    ]);
  };

  useEffect(() => {
    console.log("selectedImg", selectedImg);
    console.log("selectedObject", selected3DObject);
  }, []);

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
    setAlternatives([
      {
        text: "",
        index: 1,
      },
    ]);

    setForm({
      title: "",
      rightOne: 1,
      teacher: _id,
    });

    setHasObject(false);
    setHasImg(false);
    setOpen(false);
  };

  async function onSubmit(skip) {
    var formData = new FormData();

    formData.append("title", form.title);
    formData.append("questionary", idQuestionary);
    formData.append("alternatives", JSON.stringify(alternatives));
    formData.append("rightOne", form.rightOne);
    formData.append("teacher", _id);
    formData.append("path", form.path);

    formData.append("hasObject", hasObject);
    formData.append("objName", hasObject ? selected3DObject.obj : null);

    formData.append("hasImg", hasImg);
    if (hasImg) {
      formData.append("file", selectedImg.file, selectedImg.name);
    }

    try {
      await api.post("/questionary/question/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => console.log(e),
      });

      handleClose();

      getQuestionary();
    } catch (err) {
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
                <Grid.Col width={10}>
                  <Form.Group label="Alternativas"></Form.Group>
                </Grid.Col>
                <Grid.Col width={2}>
                  {/* <IconButton color="primary">
                    <AddIcon />
                  </IconButton> */}
                  <Button
                    className="align-self-right"
                    color="primary"
                    icon="plus"
                    onClick={addNewAlternative}
                  />
                </Grid.Col>
              </Grid.Row>
              {alternatives.map((alternative, index) => (
                <Grid.Row alignItems="center" className="mb-2" key={index}>
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
            <div
              style={{
                border: "1px solid #ddd",
                height: "0px",
                width: "100%",
                margin: "10px",
              }}
            ></div>
          </Grid.Row>

          <Form.Group label="Anexos"></Form.Group>

          <Grid.Row>
            <Grid.Col>
              <FormControlLabel
                control={
                  <Switch
                    value={hasObject}
                    onChange={(e) => setHasObject(e.target.checked)}
                  />
                }
                label="Anexar Objeto 3D?"
              />
            </Grid.Col>
          </Grid.Row>

          {/* OBJECTS */}
          {hasObject && (
            <div className={"justify-content-between"}>
              <List3DCards
                objects={objects}
                setSelected={setSelected3DObject}
                selected={selected3DObject}
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
                    />
                  }
                  label="Anexar imagem? (somente PNG ou JPG)"
                />

                {hasImg && (
                  <Grid.Row cards alignItems="center">
                    <Grid.Col width={12}>
                      <Dropzone
                        setSelectedImg={setSelectedImg}
                        selectedImg={selectedImg}
                      />
                    </Grid.Col>
                  </Grid.Row>
                )}
              </>
            </Grid.Col>
          </Grid.Row>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" icon="x">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              if (alternatives.length == 1) {
                setModalVisible(true);
                return;
              }
              onSubmit();
            }}
            color="primary"
            icon="save"
            disabled={form.title == "" || form.title == null}
          >
            Criar Questão
          </Button>
        </DialogActions>

        <ModalConfirmOneAlternative
          open={modalVisible}
          setOpen={setModalVisible}
          onSubmit={onSubmit}
        />
      </Dialog>
    </div>
  );
}
