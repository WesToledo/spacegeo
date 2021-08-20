import React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function PosicaoEntrePlanosNoEspacoPage() {
  const rows = [
    {
      name: "Plano",
      link: "/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco/plano",
    },
    {
      name: "Posições Relativas",
      link: "/estudos/geometria-posicao/posicoes-relativas-entre-pontos-retas-planos-no-espaco/posicao-planos-no-espaco/posicoes-relativas",
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

export default PosicaoEntrePlanosNoEspacoPage;
