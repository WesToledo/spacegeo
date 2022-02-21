import { TailSpin } from "react-loader-spinner";

import React from "react";
import { Grid } from "tabler-react";

function Loader() {
  return (
    <Grid.Row
      alignItems="center"
      justifyContent="center"
      className="justify-content-center align-items-center m-9"
    >
      <Grid.Col width={1}>
        <TailSpin color="#00BFFF" height={80} width={80} />;
      </Grid.Col>
    </Grid.Row>
  );
}

export default Loader;
