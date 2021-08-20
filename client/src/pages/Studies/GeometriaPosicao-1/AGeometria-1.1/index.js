import React, { useEffect, useReducer, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

import { Page, Grid, Table, BlogCard, Button, Card, Form } from "tabler-react";

import Wrapper from "~/components/Wrapper";

function AGeometriaPage() {
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
              title={"Introdução a Geometria Espacial (Smole e Diniz, 2005)"}
              body={
                "A Geometria é uma das mais belas partes da Matemática. O prefixo geo significa terra, mas a Geometria está presente em todo o universo, desde o microcosmo até o macrocosmo. Além de nos ajudar na compreensão das coisas do mundo concreto, a Geometria abre-nos a possibilidade de criar imagens ilusórias e de imaginar mundos abstratos, frutos da fantástica capacidade de criação do cérebro humano. Ela surgiu da necessidade dos seres humanos de medir terras e demarcar propriedades, mas, atualmente, está voltada para o estudo das figuras, de suas propriedades e relações. Ao estudarmos uma figura, preocupamo-nos com sua posição, sua forma e seu tamanho. A Geometria é parte do conhecimento desenvolvido na tentativa humana de compreender certos aspectos do mundo em que vive, pois este universo é repleto de objetos, coisas e entes de várias formas e tamanhos que ocupam as mais variadas posições. Medir, examinar formas, comparar e analisar posições de objetos são algumas das preocupações do dia a dia do ser humano. Desde o início de seus estudos sobre Geometria, certamente você analisou e aprendeu muitos fatos e relações. Neste momento, no entanto, é interessante discutirmos de forma mais organizada tudo o que foi feito até aqui, para podermos avançar com algumas relações importantes acerca das posições de forma geométricas e de suas propriedades."
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </Wrapper>
  );
}

export default AGeometriaPage;
