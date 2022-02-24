import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

import DeleteIcon from "@material-ui/icons/Delete";

import { Grid, Badge, Form, Button, Text } from "tabler-react";
import { Chip } from "@material-ui/core";

import api from "~/services/api";
import useStore from "~/store";

export default function ClassesModal({ open, setOpen, idQuestionary }) {
  const { _id } = useStore((state) => state.user);

  const [questionaryClasses, setQuestionaryClasses] = useState([]);
  const [possibleClasses, setPossibleClasses] = useState([]);
  const [selectedClasse, setSelectedClasse] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  async function onSubmit() {
    console.log(questionaryClasses.map((question) => question._id));
    try {
      await api.post("/questionary/add-classes", {
        classesIds: questionaryClasses.map((question) => question._id),
        idQuestionary,
      });
      handleClose();
    } catch (err) {
      console.log(err);
      handleClose();
    }
  }

  async function getQuestionaryClasses() {
    try {
      const response = await api.get("/questionary/classes/" + idQuestionary);
      setQuestionaryClasses(response.data.questionary.classes);
      console.log(response.data.questionary.classes);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPossibleClasses() {
    try {
      const response = await api.get("/class/list/" + _id);
      setPossibleClasses(response.data.classes);
      console.log(response.data.classes);
    } catch (err) {
      console.log(err);
    }
  }

  function handleAddClasse() {
    for (const classe of possibleClasses) {
      if (classe._id == selectedClasse) {
        setQuestionaryClasses([...questionaryClasses, classe]);
        setPossibleClasses(
          possibleClasses.filter((classe) => classe._id != selectedClasse)
        );
        setSelectedClasse(undefined);
        return;
      }
    }
  }
  function handleOnDeleteClass(_id) {
    setQuestionaryClasses(
      questionaryClasses.filter((classe) => classe._id != _id)
    );
    setPossibleClasses([
      ...possibleClasses,
      questionaryClasses.filter((classe) => classe._id == _id),
    ]);
    getPossibleClasses();
    setSelectedClasse(undefined);
  }

  useEffect(() => {
    getQuestionaryClasses();
    getPossibleClasses();
  }, []);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">Vincular Turmas</DialogTitle>
        <DialogContent>
          <Grid.Row alignItems="center" justifyContent="flex-start">
            <Grid.Col width={9}>
              <Form.Select
                // value={selectedClasse ? selectedClasse : null}
                onClick={(e) => {
                  setSelectedClasse(e.target.value);
                }}
              >
                <option disabled selected>
                  Selecione a turma ...
                </option>
                {possibleClasses
                  .filter(
                    (possibleClasse) =>
                      questionaryClasses.filter(
                        (questionaryClasse) =>
                          questionaryClasse._id == possibleClasse._id
                      ).length == 0
                  )
                  .map((classe, index) => (
                    <option key={index} value={classe._id}>
                      {classe.name}
                    </option>
                  ))}
              </Form.Select>
            </Grid.Col>

            <Grid.Col width={3}>
              <Button
                color="primary"
                icon="plus"
                onClick={() => handleAddClasse()}
              >
                Adicionar
              </Button>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row cards>
            <Grid.Col width={12}>
              <Text className="m-2">Turmas vinculadas</Text>
            </Grid.Col>
            {questionaryClasses.map(({ _id, name }) => (
              <Chip
                label={name}
                variant="outlined"
                onDelete={() => handleOnDeleteClass(_id)}
                className="m-2"
              />
            ))}
          </Grid.Row>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" icon="x">
            Cancelar
          </Button>
          <Button color="primary" icon="save" onClick={onSubmit}>
            Salvar Alteração
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
