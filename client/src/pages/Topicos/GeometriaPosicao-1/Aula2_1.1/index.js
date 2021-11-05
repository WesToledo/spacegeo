import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Table, Badge, Button, Card } from "tabler-react";

import Wrapper from "~/components/Wrapper";

import LibrasButton from "~/components/LibrasButton";
import Dialog from "./Dialog";

const coincidentes = require("./assets/img/2-2coincidentes.bmp");
const paralelos = require("./assets/img/2-2paralelos.bmp");
const planos_perpendiculares = require("./assets/img/2-4.bmp");
const reta_contida_no_plano = require("./assets/img/2-1reta-contida-no-plano.bmp");
const reta_e_plano_perpendiculares = require("./assets/img/2-3.bmp");
const reta_paralela_ao_plano = require("./assets/img/2-1reta-paralela-ao-plano.bmp");
const secante_ao_plano = require("./assets/img/2-1reta-secante-ao-plano.bmp");
const secantes = require("./assets/img/2-2secantes.bmp");

const reta_secante_ao_planoA = require("./assets/audios/aula2.1_reta_secante_plano.mp3");
const reta_contida_planoA = require("./assets/audios/aula2.1_reta_contida_plano.mp3");
const reta_paralela_planoA = require("./assets/audios/aula2.1_reta_paralela_plano.mp3");
const paralelos_coincidentesA = require("./assets/audios/aula2.2_paralelos_coincidentes.mp3");
const plano_paraalelos_distintosA = require("./assets/audios/aula2.2_planos_parelelos_distintos.mp3");
const planos_secantesA = require("./assets/audios/aula2.2_planos_secantes.mp3");
const reta_plano_perpendicularesA = require("./assets/audios/aula2.3_reta_plano_perpendiculares.mp3");
const planos_perpendicularesA = require("./assets/audios/aula2.4_planos_perpendiculares.mp3");

const reta_secante_ao_planoV = require("./assets/videos/AULA2.1_RETA_SECANTE_PLANO.mp4");
const reta_contida_planoV = require("./assets/videos/AULA2.1_RETA_CONTIDA_PLANO.mp4");
const reta_paralela_planoV = require("./assets/videos/AULA2.1_RETA_PARALELA_PLANO.mp4");
const paralelos_coincidentesV = require("./assets/videos/AULA2.2_PLANOS_PARALELOS_COINCIDENTES.mp4");
const plano_paraalelos_distintosV = require("./assets/videos/AULA2.2_PLANOS_PARALELOS_DISTINTOS.mp4");
const planos_secantesV = require("./assets/videos/AULA2.2_PLANOS_SECANTES.mp4");
const reta_plano_perpendicularesV = require("./assets/videos/AULA2.3_RETA_PLANO_PERPENDICULARES.mp4");
const planos_perpendicularesV = require("./assets/videos/AULA2.4_PLANOS_PERPENDICULARES.mp4");

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
                  </li>
                  <li
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
                        setCurrentVideo(reta_secante_ao_planoV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.1_reta_secante_ao_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
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
                        setCurrentVideo(reta_contida_planoV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.1_reta_contida_ao_plano"
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
                  </li>
                  <li
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
                        setCurrentVideo(reta_paralela_planoV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.1_reta_paralela_ao_plano"
                      className="text-white m-1"
                    />
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
                  </li>
                  <li
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
                        setCurrentVideo(planos_secantesV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.2_secantes"
                      className="text-white m-1"
                    />
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
                      src={paralelos}
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
                    <LibrasButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentVideo(plano_paraalelos_distintosV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.2_paralelos_distintos"
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
                  </li>
                  <li
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
                        setCurrentVideo(paralelos_coincidentesV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.2_paralelos_coincidentes"
                      className="text-white m-1"
                    />
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
                  ></li>
                  <li
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
                        setCurrentVideo(reta_plano_perpendicularesV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.3_reta_e_plano_perpendiculares"
                      className="text-white m-1"
                    />
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
                  ></li>
                  <li
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
                        setCurrentVideo(planos_perpendicularesV);
                      }}
                    />
                    <Button
                      icon="box"
                      color="primary"
                      RootComponent="a"
                      href="/ra.html?obj=ob2.3_planos_perpendiculares"
                      className="text-white m-1"
                    />
                  </li>

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

export default PontoRetaPlanoESuasRepresentacoesPage;
