import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

import Dialog from "./Dialog";
import LibrasButton from "~/components/LibrasButton";
import ButtonList from "~/components/ButtonList";

const ponto = require("./assets/img/1-1ponto.bmp");
const reta = require("./assets/img/1-1reta.bmp");
const plano = require("./assets/img/1-1plano.bmp");
const distintas = require("./assets/img/1-2distintas.bmp");
const coincidentes = require("./assets/img/1-2coincidentes.bmp");
const concorrentes = require("./assets/img/1-2concorrentes.bmp");
const reversas = require("./assets/img/1-2reversas.bmp");
const perpendiculares = require("./assets/img/1-3perpendiculares.bmp");
const ortogonais = require("./assets/img/1-4ortogonais.bmp");
const obliquas = require("./assets/img/1-5.bmp");

const audio = require("./assets/audios/audio.mp3");

const pontoA = require("./assets/audios/aula1.1_ponto.mp3");
const retaA = require("./assets/audios/aula1.1_reta.mp3");
const planoA = require("./assets/audios/aula1.1_plano.mp3");
const distintasA = require("./assets/audios/aula1.2_paralelas_distintas.mp3");
const coincidentesA = require("./assets/audios/aula1.2_coincidentes.mp3");
const concorrentesA = require("./assets/audios/aula1.2_concorrentes.mp3");
const reversasA = require("./assets/audios/aula1.2_reversas.mp3");
const perpendicularesA = require("./assets/audios/aula1.3_retas_perpendiculares.mp3");
const ortogonaisA = require("./assets/audios/aula1.4_retas_ortogonais.mp3");
const obliquasA = require("./assets/audios/aula1.5_retas_obliquas.mp3");

const planoV = require("./assets/videos/AULA1.1_PLANO.mp4");
const pontoV = require("./assets/videos/AULA1.1_PONTO.mp4");
const retaV = require("./assets/videos/AULA1.1_RETA.mp4");
const coincidentesV = require("./assets/videos/AULA1.2_COINCIDENTES.mp4");
const concorrentesV = require("./assets/videos/AULA1.2_CONCORRENTES.mp4");
const distintasV = require("./assets/videos/AULA1.2_PARALELAS_DISTINTAS.mp4");
const reversasV = require("./assets/videos/AULA1.2_REVERSAS.mp4");
const perpendicularesV = require("./assets/videos/AULA1.3_RETAS_PERPENDICULARES.mp4");
const ortogonaisV = require("./assets/videos/AULA1.4_RETAS_ORTOGONAIS.mp4");
const obliquasV = require("./assets/videos/AULA1.5_RETAS_OBLIQUAS.mp4");

function Aula_1() {
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
                  <>
                    <h4>
                      <strong>1.1 NOÇÕES PRIMITIVAS</strong>
                    </h4>

                    <p style={{ margin: 0 }}>Ponto:</p>

                    <p style={{ margin: 0 }}>
                      O ponto é um objeto da geometria espacial adimensional.
                      Não possui comprimento, nem largura, nem altura.
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
                        src={ponto}
                        width="10%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>

                    <ButtonList
                      video={pontoV}
                      objName="ob1.1_reta"
                      audio={pontoA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                      shouldDisplayRA={false}
                    />
                  </>
                  {/* ------------------------------------------------------------------------------------------------------------------------ */}
                  {/* ------------------------------------------------------------------------------------------------------------------------ */}
                  <>
                    <p style={{ margin: 0 }}>Reta</p>
                    <p style={{ margin: 0 }}>
                      A reta é um objeto unidimensional e possui apenas
                      comprimento.
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
                        src={reta}
                        width="60%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>
                    <ButtonList
                      video={retaV}
                      objName="ob1.1_reta"
                      audio={retaA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                  </>
                  {/* ------------------------------------------------------------------------------------------------------------------------ */}
                  {/* ------------------------------------------------------------------------------------------------------------------------ */}
                  <>
                    <p style={{ margin: 0 }}>Plano</p>
                    <p style={{ margin: 0 }}>
                      O plano é um objeto bidimensional e possui comprimento e
                      largura.
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
                        src={plano}
                        width="60%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>
                    <ButtonList
                      video={planoV}
                      objName="ob1.1_plano"
                      audio={planoA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                  </>
                  {/* ------------------------------------------------------------------------------------------------------------------------ */}
                  {/* ------------------------------------------------------------------------------------------------------------------------ */}

                  <>
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
                        <span style={{ fontWeight: "normal" }}>
                          ⇒ Coplanares
                        </span>
                      </h5>
                    </li>
                    <p style={{ margin: 0 }}>
                      Duas retas paralelas no espaço estão contidas no mesmo
                      plano e não possuem pontos em comum.
                    </p>
                    <p style={{ margin: 0 }}>a) Distintas:</p>
                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={distintas}
                        width="60%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>
                    <ButtonList
                      video={distintasV}
                      objName="ob1.1_reta"
                      audio={distintasA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                      shouldDisplayRA={false}
                    />
                  </>
                  {/* ------------------------------------------------------------------------------------------------------------------------ */}
                  {/* ------------------------------------------------------------------------------------------------------------------------ */}

                  <>
                    <p style={{ margin: 0 }}>b) Coincidentes:</p>
                    <p>
                      Duas retas coincidentes no espaço são coplanares e possuem
                      todos os pontos em comum.
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
                        src={coincidentes}
                        width="60%"
                        style={{ margin: "1.8rem" }}
                      />
                    </li>
                    <ButtonList
                      video={coincidentesV}
                      objName="ob1.2_paralelas_coincidentes"
                      audio={coincidentesA}
                      setCurrentVideo={setCurrentVideo}
                      setOpen={setOpen}
                    />
                  </>

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

                  <p>
                    Duas retas concorrentes são coplanares e possuem um único
                    ponto em comum.
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
                      src={concorrentes}
                      width="60%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>

                  <ButtonList
                    video={concorrentesV}
                    objName="ob1.2_concorrentes"
                    audio={concorrentesA}
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
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Duas retas são reversas quando não são coplanares. Duas
                      retas são reversas se, e somente se, não existe um plano
                      que as contém.
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
                      src={reversas}
                      width="60%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>
                  {/* <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(reversasV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.2_reversas"
                      className="text-white m-1"
                    />
                  </li> */}

                  <ButtonList
                    video={reversasV}
                    objName="ob1.2_reversas"
                    audio={reversasA}
                    setCurrentVideo={setCurrentVideo}
                    setOpen={setOpen}
                  />

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
                      Uma reta é perpendicular a outra se, e somente se, são
                      concorrentes e formam um ângulo de 90º.
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
                    <p style={{ margin: 0 }}></p>

                    <img
                      src={perpendiculares}
                      width="60%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>

                  <ButtonList
                    video={perpendicularesV}
                    objName="ob1.3_retas_perpendiculares"
                    audio={perpendicularesA}
                    setCurrentVideo={setCurrentVideo}
                    setOpen={setOpen}
                  />

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
                      Uma reta é ortogonal a outra se, e somente se, são
                      reversas, ou seja, não possuem um plano que as contém, mas
                      forma um ângulo de 90º.
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
                      src={ortogonais}
                      width="60%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>

                  <ButtonList
                    video={ortogonaisV}
                    objName="ob1.4_retas_ortogonais"
                    audio={ortogonaisA}
                    setCurrentVideo={setCurrentVideo}
                    setOpen={setOpen}
                  />

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
                      Duas retas são chamadas oblíquas quando são concorrentes e
                      não são perpendiculares.
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
                      src={obliquas}
                      width="60%"
                      style={{ margin: "1.8rem" }}
                    />
                  </li>

                  <ButtonList
                    video={obliquasV}
                    objName="ob1.5_retas_obliquas"
                    audio={obliquasA}
                    setCurrentVideo={setCurrentVideo}
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
                      href="/topicos/geometria-posicao/aula-2"
                    >
                      Próxima aula
                    </Button>
                  </Button.List>
                </>
              }
            />
          </Grid.Col>
        </Grid.Row>

        <Dialog currentVideo={currentVideo} open={open} setOpen={setOpen} />
      </Page.Content>
    </Wrapper>
  );
}

export default Aula_1;
