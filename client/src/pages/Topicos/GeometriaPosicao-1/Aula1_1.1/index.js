import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

import Dialog from "./Dialog";
import LibrasButton from "~/components/LibrasButton";

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

function PontoRetaPlanoESuasRepresentacoesPage() {
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
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={pontoA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(pontoV);
                      }}
                    />
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
                    ></Button>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={retaA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(retaV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={planoA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(planoV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={distintasA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(distintasV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={coincidentesA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(coincidentesV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={concorrentesA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(concorrentesV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={reversasA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

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
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={perpendicularesA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(perpendicularesV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={ortogonaisA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(ortogonaisV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ width: "13rem", height: "30px" }}>
                      <source src={obliquasA} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(obliquasV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob1.1_plano"
                      className="text-white m-1"
                    />
                  </li>
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

export default PontoRetaPlanoESuasRepresentacoesPage;
