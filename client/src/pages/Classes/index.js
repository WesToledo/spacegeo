import React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function ClassesPage() {
  return (
    <Wrapper>
      <Page.Content title="Turmas">
        {/* <Grid.Row cards>
          <Grid.Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Options>
                  <Button icon="plus" color="success">
                    Criar Turma
                  </Button>
                </Card.Options>
              </Card.Header>
              <Card.Body>
                <Grid.Col sm={3}>
                  <StoreCard
                    title="Apple iPhone 7 Plus 256GB Red Special Edition"
                    subtitle="Apple"
                    price="$499"
                  />
                </Grid.Col>
                <Grid.Col sm={3}>
                  <StoreCard
                    title="Apple iPhone 7 Plus 256GB Red Special Edition"
                    subtitle="Apple"
                    price="$499"
                  />
                </Grid.Col>
              </Card.Body>
              <Card.Footer>This is standard card footer</Card.Footer>
            </Card>
          </Grid.Col>
        </Grid.Row> */}

        <Card>
          <Card.Header>
            <Card.Options>
              <Button icon="plus" color="success">
                Criar Turma
              </Button>
            </Card.Options>
          </Card.Header>
          <Card.Body>
            <Grid.Row cards>
              <Grid.Col width={3}>
                <Card>
                  <Card.Header>
                    <Card.Title>Informática E1</Card.Title>
                    <Card.Options></Card.Options>
                  </Card.Header>
                  <Card.Body>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Icon prefix="fa" name="key" className="m-2" />
                      <Text>Chave: asdasdasdas</Text>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <div
                      style={{ display: "flex", flexDirection: "row-reverse" }}
                    >
                      <Button icon="plus" size="sm" color="primary">
                        Ver alunos
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
          {/* <Card.Footer>This is standard card footer</Card.Footer> */}
        </Card>
      </Page.Content>
    </Wrapper>
  );
}

export default ClassesPage;
