import React, { useEffect, useReducer, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import { Page, Grid, Table, BlogCard, Button, Card, Form } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function PlanoPage() {
  return (
    <Wrapper>
      <Page.Content
        title="Geometria de Posição"
        subTitle={
          <h2
            style={{
              fontSize: "1rem",
              color: "#6e7687",
              marginLeft: "0",
              marginBottom: 0,
            }}
          >
            Posição entre planos no espaço
          </h2>
        }
      >
        <Grid.Row className="justify-content-center">
          <Grid.Col lg={6} md={6} xl={6}>
            <Card
              title={"Plano"}
              options={
                <>
                  <Button
                    icon="box"
                    color="primary"
                    RootComponent="a"
                    href="/ar.html"
                    className="text-white"
                  >
                    Ver em RA
                  </Button>
                </>
              }
              body={
                "O plano é a representação de uma figura geométrica de duas dimensões, as quais ocupam uma parte do espaço tridimensional. Também é descrito como um conjunto de retas dispostas lado a lado e sem que exista espaço entre elas."
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </Wrapper>
  );
}

export default PlanoPage;
