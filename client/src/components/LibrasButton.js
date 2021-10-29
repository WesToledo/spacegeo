import React from "react";

import { StandaloneFormPage, FormCard, FormTextInput } from "tabler-react";
// import { Container } from './styles';

const img = require("assets/img/libras.png");

function LibrasButton({ onClick }) {
  return (
    <a onClick={onClick} style={{ color: "transparent" }}>
      <img src={img} width={38} height={38} />
    </a>
  );
}
export default LibrasButton;
