import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";

import { Button } from "tabler-react";

import api from "~/services/api";

export default function DataTable({ answers }) {
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
      name: "value",
      label: "Valor",
      options: {
        display: true,
      },
    },
    {
      name: "grade",
      label: "Nota",
      options: {
        display: true,
      },
    },
    // {
    //   name: "actions",
    //   label: "Mais informações",
    //   options: {
    //     display: true,
    //     filter: false,
    //     viewColumns: false,
    //   },
    // },
  ];

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
  };

  function refreshDataTable() {
    var rows = [];
    answers.map((answer) => {
      rows.push({
        name: answer.questionary.title,
        value: answer.questionary.grade.toFixed(2),
        grade: answer.grade.toFixed(2),

        // actions: (
        //   <Button
        //     color="secondary"
        //     icon="arrow-right"
        //     RootComponent="a"
        //     href="#"
        //   >
        //     Ver notas
        //   </Button>
        // ),
      });
    });
    setData(rows);
  }

  useEffect(() => {
    refreshDataTable();
  }, []);

  return (
    <MUIDataTable title={""} data={data} columns={columns} options={options} />
  );
}
