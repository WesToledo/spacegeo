import React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function PosicaoEntrePlanosNoEspaco() {
  const rows = [
    {
      name: "Posição entre ponto e reta no espaço",
      link: "/topicos/geometria-posicao/aula-3",
    },
    {
      name: "Posição entre pontos no espaço",
      link: "/topicos/geometria-posicao/aula-3",
    },
    {
      name: "Posição entre retas no espaço",
      link: "/topicos/geometria-posicao/aula-3",
    },
    {
      name: "Posição entre planos no espaço",
      link: "/topicos/geometria-posicao/aula-3/posicao-planos-no-espaco",
    },
    {
      name: "Posição entre retas e planos",
      link: "/topicos/geometria-posicao/aula-3",
    },
  ];

  // font-size: 0.8125rem;
  //   color: #6e7687;
  //   margin-left: 2rem;

  return (
    <Wrapper>
      <Page.Content
        title="Geometria de Posição"
        subTitle={
          <h2 style={{ fontSize: "1rem", color: '#6e7687', marginLeft: '0', marginBottom: 0 }}>
            Posições relativas entre pontos, retas e planos no espaço
          </h2>
        }
      >
        <Grid.Row>
          {/* <Grid.fontSize: "0.3"}>
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

export default PosicaoEntrePlanosNoEspaco;
