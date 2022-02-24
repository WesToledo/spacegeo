import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Text, Icon, Button, Card } from "tabler-react";

import api from "~/services/api";
import Wrapper from "~/components/Wrapper";
import useStore from "~/store";

function InstructionsTeacherPage(props) {
  return (
    <Wrapper>
      <Page.Content title="Space Geo">
        <Card>
          <Card.Header>Instruções de uso</Card.Header>
          <Card.Body>
            Clique em um dos links abaixo para acessar todas as instruções de
            uso do SpaceGeo_AR
            <br />
            <a
              href={
                "https://drive.google.com/drive/folders/1gPljNWXyik6TBFkh0xhW4S88np-eaTNa?usp=sharing"
              }
            >
              TEXTO
            </a>
            <br />
            <a
              href={
                "https://drive.google.com/drive/folders/1-pld8L-03Lksc4Lr5uNsZr1aJzPqZh5e?usp=sharing"
              }
            >
              VÍDEO
            </a>
          </Card.Body>
        </Card>
      </Page.Content>
    </Wrapper>
  );
}

export default InstructionsTeacherPage;
