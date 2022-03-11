import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";

import ModalConfirmDelete from "./ModalConfirmDelete";
import SimpleDialogDemo from "./Modal";
import useStore from "~/store";

function ClassesPage(props) {
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState({
    visible: false,
    id: null,
    name: "",
  });

  const [classes, setClasses] = useState([]);
  const { _id } = useStore((state) => state.user);

  function handleOnCreateNewClass() {
    setOpen(true);
  }

  async function getClasses() {
    try {
      const response = await api.get("/class/list/" + _id);
      setClasses(response.data.classes);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteClass(id) {
    try {
      await api.delete("/class/remove/" + openDeleteModal.id);
      getClasses();
    } catch (err) {
      console.log(err);
      getClasses();
    }
  }

  useEffect(() => {
    getClasses();
  }, []);

  return (
    <Wrapper>
      <Page.Content title="Turmas">
        <Card>
          <Card.Header>
            <Card.Options>
              <Button
                icon="plus"
                color="success"
                onClick={handleOnCreateNewClass}
              >
                Criar Turma
              </Button>
            </Card.Options>
          </Card.Header>
          <Card.Body>
            <Grid.Row cards>
              {classes.map((classe, index) => (
                <Grid.Col xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
                  <Card>
                    <Card.Header>
                      <Card.Title>{classe.name}</Card.Title>
                      <Card.Options></Card.Options>
                    </Card.Header>
                    <Card.Body>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Icon prefix="fa" name="key" className="m-2" />
                        <Text
                          style={{ minWidth: 120, margin: 5 }}
                        >{`Chave: ${classe.hash}`}</Text>
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <Button
                          className="m-1"
                          icon="plus"
                          size="sm"
                          color="primary"
                          onClick={() =>
                            props.history.push(`/turmas/${classe._id}`)
                          }
                        >
                          Ver alunos
                        </Button>
                        <Button
                          className="m-1"
                          icon="trash"
                          size="sm"
                          color="danger"
                          onClick={() =>
                            setOpenDeleteModal({
                              visible: true,
                              id: classe._id,
                              name: classe.name,
                            })
                          }
                        />
                      </div>
                    </Card.Footer>
                  </Card>
                </Grid.Col>
              ))}
            </Grid.Row>
            {classes.length == 0 && (
              <Text className="m-5">Nenhuma turma encontrada</Text>
            )}
          </Card.Body>
          <SimpleDialogDemo
            open={open}
            setOpen={setOpen}
            getClasses={getClasses}
          />
          <ModalConfirmDelete
            open={openDeleteModal}
            setOpen={setOpenDeleteModal}
            onSubmit={handleDeleteClass}
          />
        </Card>
      </Page.Content>
    </Wrapper>
  );
}

export default ClassesPage;
