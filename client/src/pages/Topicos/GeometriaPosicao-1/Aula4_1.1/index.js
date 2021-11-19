import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

import LibrasButton from "~/components/LibrasButton";
import Dialog from "./Dialog";
import ButtonList from "~/components/ButtonList";

const img4_1 = require("./assets/img/4.1.png");
const img4_2 = require("./assets/img/4.2.png");
const img4_3 = require("./assets/img/4.3.png");
const img4_4 = require("./assets/img/4.4.png");
const img4_5 = require("./assets/img/4.5.png");

const reta_contida_planoA = require("./assets/audios/aula2.1_reta_contida_plano.mp3");

const reta_contida_planoV = require("./assets/videos/AULA2.1_RETA_CONTIDA_PLANO.mp4");

function Aula_4() {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();

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
            Aula 3
          </h2>
        }
      >
        <Grid.Row className="justify-content-center">
          <Grid.Col lg={6} md={6} xl={6}>
            <Card
              title={"Aula 4: Distâncias no Espaço"}
              body={
                <>
                  <h4>
                    <strong>4.1 DISTÂNCIA ENTRE PONTOS</strong>
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
                      A distância entre os pontos P e Q é a medida do segmento
                      PQ em alguma unidade de medida
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
                      src={img4_1}
                      width="50%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>

                  <ButtonList
                    video={reta_contida_planoV}
                    objName="4.1"
                    audio={reta_contida_planoA}
                    setCurrentVideo={setCurrentVideo}
                    setOpen={setOpen}
                  />

                  {/* ------------------------------------ */}
                  <>
                    <h4
                      style={{
                        marginTop: "1em",
                      }}
                    >
                      <strong>4.2 DISTÂNCIA ENTRE PONTO E RETA</strong>
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
                        A distância entre uma reta A é igual à distância entre A
                        e A’, sendo A’ a projeção ortogonal de A em S
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
                        src={img4_2}
                        width="50%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={reta_contida_planoV}
                      objName="4.2"
                      audio={reta_contida_planoA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                  </>
                  {/* ------------------------------------ */}
                  <>
                    <h4
                      style={{
                        marginTop: "1em",
                      }}
                    >
                      <strong>4.3 DISTÂNCIA ENTRE PONTO E PLANO</strong>
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
                        É a distância entre o ponto A e a sua projeção ortogonal
                        sobre o plano α (A’)
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
                        src={img4_3}
                        width="50%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={reta_contida_planoV}
                      objName="4.3"
                      audio={reta_contida_planoA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                  </>

                  {/* ------------------------------------ */}

                  <>
                    <h4
                      style={{
                        marginTop: "1em",
                      }}
                    >
                      <strong>
                        4.4 DISTÂNCIA ENTRE RETA E PLANO PARALELOS
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
                      <p style={{ margin: 0 }}>
                        É a distância entre um ponto qualquer da reta A e sua
                        projeção ortogonal (A’) sobre o plano α
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
                        src={img4_4}
                        width="50%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={reta_contida_planoV}
                      objName="4.4"
                      audio={reta_contida_planoA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                  </>
                  {/* ------------------------------------ */}

                  <>
                    <h4
                      style={{
                        marginTop: "1em",
                      }}
                    >
                      <strong>4.5 DISTÂNCIA ENTRE PLANOS PARALELOS</strong>
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
                        É a distância entre dois pontos, um em cada plano, em
                        uma mesma perpendicular
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
                        src={img4_5}
                        width="50%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={reta_contida_planoV}
                      objName="4.5"
                      audio={reta_contida_planoA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                  </>

                  <Dialog
                    currentVideo={currentVideo}
                    open={open}
                    setOpen={setOpen}
                  />
                </>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </Wrapper>
  );
}

export default Aula_4;
