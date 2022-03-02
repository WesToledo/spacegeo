import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import DataTable from "./Table";
import useStore from "~/store";

function StudentsPage(props) {
  const [students, setStudents] = useState([]);

  const { user } = useStore();

  async function getStudents() {
    try {
      const response = await api.get("/user/list/by-teacher/" + user._id);

      console.log(response.data.students);
      setStudents(response.data.students);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <Wrapper>
      <Page.Content title="Alunos">
        {students.length > 0 ? (
          <Card>
            {/* <Card.Header>
            <Card.Options></Card.Options>
          </Card.Header> */}
            <Card.Body>
              {students && <DataTable students={students} />}
            </Card.Body>
            {/* <Card.Footer>This is standard card footer</Card.Footer> */}
          </Card>
        ) : (
          <Card>
            <Text className="m-6">Nenhum aluno encontrado</Text>
          </Card>
        )}
      </Page.Content>
    </Wrapper>
  );
}

export default StudentsPage;
