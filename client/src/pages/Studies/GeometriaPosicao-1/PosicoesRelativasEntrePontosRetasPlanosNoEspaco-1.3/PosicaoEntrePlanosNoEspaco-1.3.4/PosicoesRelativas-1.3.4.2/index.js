import React, { useEffect, useReducer, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import { Page, Grid, Table, BlogCard, Button, Card, Form } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function PosicoesRelativasPage() {
  const rows = [
    {
      name: "Planos Coincidentes",
      link: "/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco/posicoes-relativas/planos-coincidentes",
    },
    {
      name: "Planos Concorrentes",
      link: "/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco/posicoes-relativas/planos-concorrentes",
    },
    {
      name: "Planos Paralelos",
      link: "/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco/posicoes-relativas/planos-paralelos",
    },
  ];

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
              title={"Posições Relativas"}
              options={<></>}
              body={
                <>
                  <p>
                    As posições relativas entre planos estuda como esses
                    elementos interagem entre si no espaço tridimensional em
                    dois formatos, com e sem pontos de intersecção.
                  </p>

                  <Grid.Row>
                    <Grid.Col lg={12}>
                      <Card>
                        <Table className="card-table table-vcenter">
                          <Table.Body>
                            {rows.map((row) => (
                              <Table.Row>
                                <Table.Col>{row.name}</Table.Col>

                                <Table.Col className="text-right">
                                  <Button
                                    icon="arrow-right"
                                    color="primary"
                                    outline
                                    RootComponent="a"
                                    href={row.link}
                                  />
                                </Table.Col>
                              </Table.Row>
                            ))}
                          </Table.Body>
                        </Table>
                      </Card>
                    </Grid.Col>
                  </Grid.Row>
                </>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </Wrapper>
  );
}

export default PosicoesRelativasPage;
