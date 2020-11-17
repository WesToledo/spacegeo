import React from "react";

import {
  Page,
  Grid,
  Table,
  Badge,
  Button,
  Card,
  StoreCard,
} from "tabler-react";

import Wrapper from "~/components/Wrapper";

function QuestionPage() {
  return (
    <Wrapper>
      <Page.Content title="Questionários">
        <Grid.Row>
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

                    <Table.Col>Questionário Geometria Espacial</Table.Col>

                    <Table.Col className="text-right">
                      <Button
                        icon="arrow-right"
                        color="primary"
                        outline
                        RootComponent="a"
                        href="/sub-questionarios"
                      />
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

export default QuestionPage;
