import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";

import { Button } from "tabler-react";

import api from "~/services/api";
function fullTimeDiff(date_future, date_now) {
  // get total seconds between the times
  var delta = Math.abs(date_future - date_now) / 1000;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60;

  console.log({
    hours,
    minutes,
    seconds,
  });

  return {
    hours,
    minutes,
    seconds,
  };
}

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
      name: "time_spent",
      label: "Tempo",
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
      const diff = fullTimeDiff(
        new Date(answer.timeEnd),
        new Date(answer.timeBegin)
      );
      rows.push({
        name: answer.questionary.title,
        value: answer.questionary.grade.toFixed(2),
        grade: answer.grade.toFixed(2),
        time_spent: `	
        ${diff.hours}h ${diff.minutes}m ${parseInt(diff.seconds)}s`,

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
