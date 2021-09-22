import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";

import api from "~/services/api";

export default function DataTable({ students }) {
  console.log(students);
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
  ];

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
  };

  return (
    <MUIDataTable
      title={"Alunos"}
      data={students}
      columns={columns}
      options={options}
    />
  );
}
