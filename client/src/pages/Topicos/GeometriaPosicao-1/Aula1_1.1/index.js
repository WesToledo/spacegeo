import React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

const ponto = require("./assets/1-1ponto.bmp");
const reta = require("./assets/1-1reta.bmp");
const plano = require("./assets/1-1plano.bmp");
const distintas = require("./assets/1-2distintas.bmp");
const coincidentes = require("./assets/1-2coincidentes.bmp");
const concorrentes = require("./assets/1-2concorrentes.bmp");
const reversas = require("./assets/1-2reversas.bmp");
const perpendiculares = require("./assets/1-3perpendiculares.bmp");
const ortogonais = require("./assets/1-4ortogonais.bmp");
const obliquas = require("./assets/1-5.bmp");

function PontoRetaPlanoESuasRepresentacoesPage() {
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
            Aula 1
          </h2>
        }
      >
        <Grid.Row className="justify-content-center">
          <Grid.Col lg={6} md={6} xl={6}>
            <Card
              title={"Aula 1: Geometria do Espaço"}
              body={
                <>
                  <h4>
                    <strong>1.1 NOÇÕES PRIMITIVAS</strong>
                  </h4>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls>
                      <source src="" type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>Ponto:</p>
                    <img src={ponto} width="10%" style={{ margin: "1.8rem" }} />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>Reta:</p>
                    <img src={reta} width="40%" style={{ margin: "1.8rem" }} />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_reta"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>Plano:</p>
                    <img src={plano} width="40%" style={{ margin: "1.8rem" }} />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>

                  <h4>
                    <strong>
                      1.2 POSIÇÕES RELATIVAS DE DUAS RETAS DO ESPAÇO
                    </strong>
                  </h4>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <h5 style={{ margin: 0 }}>
                      <strong>Paralelas </strong>
                      <span style={{ fontWeight: "normal" }}>⇒ Coplanares</span>
                    </h5>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p style={{ margin: 0 }}>a) Distintas:</p>
                    </div>
                    <img
                      src={distintas}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.2_paralelas_distintas"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p style={{ margin: 0 }}>b) Coincidentes:</p>
                    </div>
                    <img
                      src={coincidentes}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.2_paralelas_coincidentes"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <h5 style={{ margin: 0 }}>
                      <strong>Concorrentes </strong>
                      <span style={{ fontWeight: "normal" }}>⇒ Coplanares</span>
                    </h5>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}></p>

                    <img
                      src={concorrentes}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.2_concorrentes"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <h5 style={{ margin: 0 }}>
                      <strong>Reversas </strong>
                      <span style={{ fontWeight: "normal" }}>
                        ⇒ Não Coplanares
                      </span>
                    </h5>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Duas retas são reversas se, e somente se, não existe plano
                      que as contém
                    </p>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={reversas}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.2_reversas"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>

                  <h4>
                    <strong>1.3 RETAS PERPENDICULARES</strong>
                  </h4>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Uma reta é perpendicular a outra, e somente se, são
                      concorrentes e formam ângulo reto
                    </p>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}></p>

                    <img
                      src={perpendiculares}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.3_retas_perpendiculares"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>

                  <h4>
                    <strong>1.4 RETAS ORTOGONAIS</strong>
                  </h4>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Uma reta é ortogonal a outra, se e somente se, são
                      reversas e formam ângulo reto
                    </p>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}></p>

                    <img
                      src={ortogonais}
                      width="50%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.3_retas_ortogonais"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>

                  <h4>
                    <strong>1.5 RETAS OBLÍQUAS</strong>
                  </h4>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Duas retas são ochamdas oblíquas quando são concorrentes e
                      não são perpendiculares
                    </p>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}></p>

                    <img
                      src={obliquas}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.3_retas_obliquas"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>
                </>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </Wrapper>
  );
}

export default PontoRetaPlanoESuasRepresentacoesPage;
