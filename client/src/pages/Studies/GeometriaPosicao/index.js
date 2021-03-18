import React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function GeometriaPosicaoPage() {
  const rows = [
    {
      name: "A Geometria",
      link: "/estudos/geometria-posicao",
    },
    {
      name: "Ponto, reta, plano e suas representações",
      link: "/estudos/geometria-posicao/",
    },
    {
      name: "Posições relativas entre pontos, retas e planos no espaço",
      link: "/estudos/geometria-posicao/posicoes-relativas",
    },
    {
      name: "Parelelismo entre retas e planos ",
      link: "/estudos/geometria-posicao",
    },
    {
      name: "Perpendicularismo entre retas e planos ",
      link: "/estudos/geometria-posicao",
    },
    {
      name: "Projeções Ortogonais ",
      link: "/estudos/geometria-posicao",
    },
    {
      name: "Distâncias no espaço",
      link: "/estudos/geometria-posicao",
    },
    {
      name: "Ângulos ",
      link: "/estudos/geometria-posicao",
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
