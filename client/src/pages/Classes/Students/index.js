import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import DataTable from "./Table";

function StudentsPage(props) {
  const [classe, setClasse] = useState(null);
  const history = useHistory();

  async function getClasse() {
    try {
      const response = await api.get("/class/" + props.match.params.id);
      console.log(response.data.classe);
      setClasse(response.data.classe);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getClasse();
  }, []);

  function goBack() {
    history.push("/turmas");
  }

  return (
    <Wrapper>
      {classe != null && (
        <Page.Content title={classe.name}>
          <Card>
            <Card.Header>
              <Card.Options>
                <Button icon="skip-back" color="primary" onClick={goBack}>
                  Voltar
                </Button>
              </Card.Options>
            </Card.Header>
            <Card.Body>
              {classe && (
                <DataTable
                  students={classe.students}
                  idClasse={props.match.params.id}
                />
              )}
            </Card.Body>
            {/* <Card.Footer>This is standard card footer</Card.Footer> */}
          </Card>
        </Page.Content>
      )}
    </Wrapper>
  );
}

export default StudentsPage;
