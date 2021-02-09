import React, { useEffect, useReducer, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import { Page, Grid, Table, BlogCard, Button, Card, Form } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function PlanosParalelosPage() {
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
              title={"Planos Paralelos"}
              options={
                <>
                  <Button
                    icon="box"
                    color="primary"
                    RootComponent="a"
                    href="/planos_e_cubo.html"
                    className="text-white"
                  >
                    Ver em RA
                  </Button>
                </>
              }
              body={
                <p>
                  Dois planos são paralelos quando não possuem pontos em comum,
                  portanto, quando não existe intersecção entre eles. Para
                  visualizar as posições relativas entre dois planos vamos
                  considerar um cubo e os planos α, β e γ passando por algumas
                  de suas faces. Os planos α e β (AR) não possuem pontos em
                  comum, sendo, portanto, paralelos. Simbolicamente se escreve
                  α//β ou β//α para indicar que α e β são paralelos.
                </p>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </Wrapper>
  );
}

export default PlanosParalelosPage;
