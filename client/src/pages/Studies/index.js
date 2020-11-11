import React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function EstudosPage() {
  return (
    <Wrapper>
      <Page.Content title="Estudos">
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
                  <Table.Row>
                    <Table.Col className="w-9">
                      <img
                        alt=""
                        src="/assets/img/dodecaedro.png"
                        className="h-8"
                      />
                    </Table.Col>

                    <Table.Col>Introdução a Geometria Espacial</Table.Col>

                    <Table.Col className="text-right">
                      <Button
                        icon="arrow-right"
                        color="primary"
                        outline
                        RootComponent="a"
                        href="/ar.html"
                      />
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col className="w-9">
                      <img
                        alt=""
                        src="https://tabler.github.io/tabler/demo/products/apple-macbook-pro.jpg"
                        className="h-8"
                      />
                    </Table.Col>
                    <Table.Col>
                      Ponto, plano, reta plano e suas representações
                      <Badge color="default"> New </Badge>
                    </Table.Col>
                    <Table.Col className="text-right">
                      <strong>$1499</strong>
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </Wrapper>
  );
}

export default EstudosPage;
