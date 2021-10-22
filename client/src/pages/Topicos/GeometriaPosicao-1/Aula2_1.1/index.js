import React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

const coincidentes = require("./assets/2-2coincidentes.bmp");
const distintos = require("./assets/distintos.png");
const planos_perpendiculares = require("./assets/2-4.bmp");
const reta_contida_no_plano = require("./assets/2-1reta-contida-no-plano.bmp");
const reta_e_plano_perpendiculares = require("./assets/2-3.bmp");
const reta_paralela_ao_plano = require("./assets/2-1reta-paralela-ao-plano.bmp");
const secante_ao_plano = require("./assets/2-1reta-secante-ao-plano.bmp");
const secantes = require("./assets/2-2secantes.bmp");

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
            Aula 2
          </h2>
        }
      >
        <Grid.Row className="justify-content-center">
          <Grid.Col lg={6} md={6} xl={6}>
            <Card
              title={"Aula 2: Paralelismo e Perpendicularidade"}
              body={
                <>
                  <h4>
                    <strong>2.1 POSIÇÕES RELATIVAS ENTRE E PLANO</strong>
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
                      Reta <i>secante</i> ao plano
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
                      src={secante_ao_plano}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.1_reta_secante_ao_plano"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>
                  {/* 2.2 */}
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Reta <i>contida</i> no plano
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
                      src={reta_contida_no_plano}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.1_reta_contida_no_plano"
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
                    <p style={{ margin: 0 }}>
                      Reta <i>paralela</i> ao plano
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
                      src={reta_paralela_ao_plano}
                      width="50%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.1_reta_paralela_ao_plano"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>
                  <h4>
                    <strong>2.2 POSIÇÕES RELATIVAS ENTRE DOIS PLANOS</strong>
                  </h4>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>Secantes</p>
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
                      src={secantes}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.2_secantes"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>
                  {/* 2.2 */}
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>Paralelos</p>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>a) Distintos (α ∩ β = ∅)</p>
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
                      src={distintos}
                      width="60%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.2_paralelos_distintos"
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
                    <p style={{ margin: 0 }}>b) Coincidentes (α = β)</p>
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
                      src={coincidentes}
                      width="40%"
                      style={{ margin: "1.8rem" }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.2_paralelos_coincidentes"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>
                  {/* 2.3 */}
                  <h4>
                    <strong>2.3 RETA E PLANO PERPENDICULARES</strong>
                  </h4>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={reta_e_plano_perpendiculares}
                      width="60%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.3_reta_e_plano_perpendiculares"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </li>

                  <h4>
                    <strong>2.4 PLANOS PERPENDICULARES</strong>
                  </h4>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={planos_perpendiculares}
                      width="60%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",

                      marginBottom: "20px",
                    }}
                  >
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=obj2.4_planos_perpendiculares"
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
