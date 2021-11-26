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
            Clique no link abaixo para acessar todas as instruções de uso do
            SpaceGeo_AR.
            <br />
            <a
              href={
                "https://drive.google.com/drive/folders/1gPljNWXyik6TBFkh0xhW4S88np-eaTNa?usp=sharing"
              }
            >
              Clique aqui
            </a>
            <br />
            É preciso que o seu dispositivo (celular ou tablet) seja capaz de
            abrir arquivos do tipo PDF. Se não tiver esse recurso, baixe
            gratuitamente esse recurso em:
            <br />
            <a href={"https://get.adobe.com/br/reader/?promoid=TTGWL47M  "}>
              Clique aqui
            </a>
          </Card.Body>
        </Card>
      </Page.Content>
    </Wrapper>
  );
}

export default InstructionsTeacherPage;
