import React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

const img1 = require("./assets/image22.png");
const img2 = require("./assets/image23.png");
const img3 = require("./assets/image25.png");
const img4 = require("./assets/image26.png");
const img5 = require("./assets/image28.png");

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
            A geometria
          </h2>
        }
      >
        <Grid.Row className="justify-content-center">
          <Grid.Col lg={6} md={6} xl={6}>
            <Card
              title={
                "Pontos, retas, planos e suas representações (Smole e Diniz, 2005)"
              }
              body={
                <>
                  <p>
                    Em Geometria, como em todo ramo científico, estabelecemos
                    ideias e conceitos que, embora não tenham correspondentes na
                    vida real, são necessários para que possamos tentar
                    compreender a realidade. Os conceitos básicos da Geometria
                    adotados sem definição são os de: ponto, reta e plano.Um
                    ponto é concebido como algo sem dimensão, sem massa e sem
                    volume. Exemplos
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={img1} width="65%" style={{ margin: "20px" }} />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/planos_coincidentes.html"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={img2} width="65%" style={{ margin: "20px" }} />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/planos_coincidentes.html"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={img3} width="65%" style={{ margin: "20px" }} />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/planos_coincidentes.html"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </div>
                  <p style={{ margin: 10 }}>
                    Obs.: Como observado, é usual utilizar letras maiúsculas do
                    alfabeto para identificar os pontos. Dessa forma, podemos
                    representar o segmento de extremidade A e B citando apenas
                    esses dois pontos, AB, e os lados do polígono ABCDE como
                    sendo os segmentos AB, CD, DE, EF e FG ou AB, CD, DE, EF e
                    FG. Uma reta é um conjunto de pontos concebido sem
                    espessura, sem começo e sem fim. Sobre uma reta definimos
                    segmentos e semirretas. Exemplos:
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={img4} width="65%" style={{ margin: "20px" }} />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/planos_coincidentes.html"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={img5} width="65%" style={{ margin: "20px" }} />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/planos_coincidentes.html"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </div>
                  <p style={{ margin: 10 }}>
                    As retas em geral são nomeadas com letras minúsculas do
                    nosso alfabeto ou por dois de seus pontos: r = AB. Usamos a
                    representação VE e VF para semirretas de origem V, VE
                    contida na reta m e VF, na reta n. Um plano é um conjunto de
                    pontos concebido sem espessura e sem fronteiras. No plano
                    estão definidas algumas figuras já conhecidas, como os
                    polígonos, as regiões poligonais, a circunferência, o
                    círculo e as faces de alguns de sólidos geométricos como o
                    cubo ou o paralelepípedo. Exemplos:
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/planos_coincidentes.html"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </div>
                  <p style={{ margin: 10 }}>
                    O trapézio é uma figura em um plano. O interior do trapézio
                    também está contido nesse plano.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/planos_coincidentes.html"
                      className="text-white"
                    >
                      Ver em RA
                    </Button>
                  </div>

                  <p style={{ margin: 10 }}>
                    A face EFGH do paralelepípedo é um retângulo do plano β. Já
                    a face ABCD não está contida no plano β.
                  </p>

                  <p style={{ margin: 10 }}>
                    Os planos são em geral representados por letras do alfabeto
                    grego ou por três pontos não alinhados do plano. Por
                    exemplo: α é o plano LMN que coincide com o plano JNM. Os
                    elementos da Geometria são definidos em um espaço, que é o
                    conjunto de pontos com os quais trabalhamos. Qualquer
                    conjunto de pontos como reta, plano, trapézio, retângulo,
                    cubo, esfera – é um subconjunto do espaço. Pontos, retas e
                    planos são idealizações da mente humana. Só existem em nossa
                    imaginação, pois no mundo real não há nada com a estrutura
                    dessas ideias. Não existem partículas, por menores que
                    sejam, sem massa ou volume. A partir das nocoes de ponto,
                    reta, plano e espaço podemos classificar as figuras
                    geométricas em:
                  </p>

                  <p style={{ margin: 10 }}>
                    <strong>Figuras planas</strong>: aquelas contidas em algum
                    plano. Objetos 3D de 2.8.1 ao 2.8.5
                  </p>

                  <p style={{ margin: 10 }}>
                    <strong>Figuras não planas</strong>: aquelas que não estão
                    totalmente contidas em nenhum plano. Objetos 3D de 2.9.1 ao
                    2.9.9
                  </p>
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
