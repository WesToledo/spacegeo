import React, { useEffect, useReducer, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import { Page, Grid, Table, BlogCard, Button, Card, Form } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function PlanosConcorrentesPage() {
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
              title={"Planos Concorrentes"}
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
                <p>
                  Também chamados de secantes, dois pontos são concorrentes
                  quando possuem pontos de intersecção. Dois planos só podem ser
                  concorrentes quando não são coincidentes, tendo apenas pontos
                  em comum. Dois planos são concorrentes quando a sua
                  intersecção é uma única reta.
                </p>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </Wrapper>
  );
}

export default PlanosConcorrentesPage;
