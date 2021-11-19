import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

import LibrasButton from "~/components/LibrasButton";
import Dialog from "./Dialog";
import ButtonList from "~/components/ButtonList";

const img3_1 = require("./assets/img/3.1.png");
const img3_2 = require("./assets/img/3.2.png");
const img3_3a = require("./assets/img/3.3a.png");
const img3_3b = require("./assets/img/3.3b.png");
const img3_4a = require("./assets/img/3.4a.png");
const img3_4b = require("./assets/img/3.4b.png");

const reta_contida_planoA = require("./assets/audios/aula2.1_reta_contida_plano.mp3");

const reta_contida_planoV = require("./assets/videos/AULA2.1_RETA_CONTIDA_PLANO.mp4");

function Aula_3() {
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
              title={"Aula 3: Projeções Ortogonais"}
              body={
                <>
                  <h4>
                    <strong>3.1 PROJEÇÃO ORTOGONAL ENTRE PONTO E PLANO</strong>
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
                      A projeção ortogonal de um ponto A sobre o plano α também
                      será um ponto (A’)
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
                      src={img3_1}
                      width="50%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>

                  <ButtonList
                    video={reta_contida_planoV}
                    objName="3.2"
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
                      <strong>
                        3.2 PROJEÇÃO ORTOGONAL ENTRE FIGURA E PLANO
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
                        A projeção ortogonal da figura F sobre o plano α é o
                        conjunto F’ das projeções ortogonais de todos os pontos
                        de F’ sobre α <br />A projeção ortogonal de F sobre α é
                        o conjunto de pontos formado pelas projeções ortogonais
                        de todos os pontos de A sobre α, resultando em F’
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
                        src={img3_2}
                        width="50%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={reta_contida_planoV}
                      objName="3.2"
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
                      <strong>3.3 PROJEÇÃO ORTOGONAL ENTRE RETA E PLANO</strong>
                    </h4>

                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ margin: 0 }}>a) Reta ortogonal</p>
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
                        src={img3_3a}
                        width="50%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={reta_contida_planoV}
                      objName="3.3a"
                      audio={reta_contida_planoA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ margin: 0, marginTop: "1em" }}>
                        b) Reta não ortogonal
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
                      <p style={{ margin: 0 }}>
                        A figura formada pela projeção ortogonal de uma reta r
                        sobre o plano α é outra reta r’
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
                        src={img3_3b}
                        width="50%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={reta_contida_planoV}
                      objName="3.3a"
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
                      <strong>3.4 PROJEÇÃO ORTOGONAL ENTRE SEGMENTO DE RETA E PLANO</strong>
                    </h4>

                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ margin: 0 }}>a) Seguimento de reta ortogonal</p>
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
                        src={img3_4a}
                        width="50%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={reta_contida_planoV}
                      objName="3.4a"
                      audio={reta_contida_planoA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ margin: 0, marginTop: "1em" }}>
                        b)  Segmento de reta não ortogonal
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
                        src={img3_4b}
                        width="50%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={reta_contida_planoV}
                      objName="3.4a"
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

export default Aula_3;
