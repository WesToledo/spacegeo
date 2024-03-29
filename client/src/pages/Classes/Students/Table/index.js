import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";

import { Button } from "tabler-react";

import api from "~/services/api";

export default function DataTable({ students }) {
  const [data, setData] = useState([]);

  const columns = [
    {
      name: "name",
      label: "Nome",
      options: {
        display: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        display: true,
      },
    },
    {
      name: "birthday",
      label: "Data de nascimento",
      options: {
        display: true,
      },
    },
    {
      name: "spent_time",
      label: "Tempo no sistema",
      options: {
        display: true,
      },
    },
    {
      name: "actions",
      label: "Mais informações",
      options: {
        display: true,
        filter: false,
        viewColumns: false,
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
  };

  function refreshDataTable() {
    var rows = [];
    students.map((student) => {
      rows.push({
        name: student.name,
        email: student.email,
        birthday: student.birthday,
        spent_time: student.spent_time,
        actions: (
          <Button
            color="secondary"
            icon="arrow-right"
            RootComponent="a"
            href={"/turmas/notas/" + student._id}
          >
            Ver notas
          </Button>
        ),
      });
    });
    setData(rows);
  }

  useEffect(() => {
    refreshDataTable();
  }, []);

  return (
    <MUIDataTable
      title={"Alunos"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
