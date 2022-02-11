import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

import LibrasButton from "~/components/LibrasButton";
import Dialog from "./Dialog";
import ButtonList from "~/components/ButtonList";

const img3_1 = require("./assets/img/3.1.png");
const img3_2 = require("./assets/img/3.2.png");
const img3_3a = require("./assets/img/3.3a_nova.png");
const img3_3b = require("./assets/img/3.3b_nova.png");
const img3_4a = require("./assets/img/3.4a_nova.png");
const img3_4b = require("./assets/img/3.4b.png");

const audio3_1 = require("./assets/audios/3.1.mp3");
const audio3_2 = require("./assets/audios/3.2.mp3");
const audio3_3a = require("./assets/audios/3.3a.mp3");
const audio3_3b = require("./assets/audios/3.3b.mp3");
const audio3_4a = require("./assets/audios/3.4a.mp3");
const audio3_4b = require("./assets/audios/3.4b.mp3");

const video3_1 = require("./assets/videos/3.1.mp4");
const video3_2 = require("./assets/videos/3.2.mp4");
const video3_3a = require("./assets/videos/3.3A.mp4");
const video3_3b = require("./assets/videos/3.3B.mp4");
const video3_4a = require("./assets/videos/3.4A.mp4");
const video3_4b = require("./assets/videos/3.4B.mp4");

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
                      será um ponto (A’).
                    </p>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={img3_1}
                      width="60%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>

                  <ButtonList
                    video={video3_1}
                    objName="3.1"
                    audio={audio3_1}
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
                        de F’ sobre α.
                      </p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={img3_2}
                        width="60%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={video3_2}
                      objName="3.2"
                      audio={audio3_2}
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
                    <p>
                      Sendo a reta r ortogonal ao plano α, a sua projeção sobre
                      esse plano é apenas o ponto P.
                    </p>

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
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={img3_3a}
                        width="60%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={video3_3a}
                      objName="3.3a"
                      audio={audio3_3a}
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
                        sobre o plano α é outra reta (r’); r’ é a projeção
                        ortogonal de r sobre α.
                      </p>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={img3_3b}
                        width="60%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={video3_3b}
                      objName="3.3a"
                      audio={audio3_3b}
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
                        3.4 PROJEÇÃO ORTOGONAL ENTRE SEGMENTO DE RETA E PLANO
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
                      <p style={{ margin: 0 }}>a) Segmento de reta ortogonal</p>
                    </li>
                    <p>
                      Sendo o segmento de reta AB ortogonal ao plano α, a sua
                      projeção sobre esse plano é apenas o ponto P.
                    </p>
                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={img3_4a}
                        width="60%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={video3_4a}
                      objName="3.4a"
                      audio={audio3_4a}
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
                        b) Segmento de reta não ortogonal
                      </p>
                    </li>
                    <p>
                      A figura formada pela projeção ortogonal de um segmento de
                      reta sobre o plano α é outro segmento de reta (A’B’).
                    </p>

                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={img3_4b}
                        width="60%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={video3_4b}
                      objName="3.4b"
                      audio={audio3_4b}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                  </>

                  <Dialog
                    currentVideo={currentVideo}
                    open={open}
                    setOpen={setOpen}
                  />

                  <Button.List align="right">
                    <Button
                      color="secondary"
                      RootComponent="a"
                      href="/topicos/geometria-posicao"
                    >
                      Voltar
                    </Button>
                    <Button
                      color="primary"
                      RootComponent="a"
                      href="/topicos/geometria-posicao/aula-3"
                    >
                      Próxima aula
                    </Button>
                  </Button.List>
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
