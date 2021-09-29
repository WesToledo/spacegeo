import React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function GeometriaPosicaoPage() {
  const rows = [
    {
      name: "Aula 1 (Geometria do Espaço)",
      link: "/topicos/geometria-posicao/aula-1",
    },
    {
      name: "Aula 2 (Paralelismo e Perpendicularidade)",
      link: "/topicos/geometria-posicao/aula-2",
    },
    {
      name: "Aula 3 (Projeções Ortogonais)",
      link: "/topicos/geometria-posicao/aula-3",
    },
    {
      name: "Aula 4 (Distância no Espaço)",
      link: "/topicos/geometria-posicao/aula-4",
    },
  ];
  return (
    <Wrapper>
      <Page.Content title="Geometria de Posição">
        <Grid.Row>
          {/* <Grid.Col lg={3}>
            <StoreCard
              title="Apple iPhone 7 Plus 256GB Red Special Edition"
              subtitle="Apple"
              price="$499"
              imgUrl="https://tabler.github.io/tabler/demo/products/apple-iphone7-special.jpg"
            />
            <StoreCard
              title="GoPro HERO6 Black"
              subtitle="GoPro"
              price="$599"
              imgUrl="https://tabler.github.io/tabler/demo/products/gopro-hero.jpg"
            />
          </Grid.Col> */}
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
      </Page.Content>
    </Wrapper>
  );
}

export default GeometriaPosicaoPage;
