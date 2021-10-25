import React from "react";

// import { Container } from './styles';

function LibrasButton() {
  return (
    <div vw="" class="enabled">
      <div vw-access-button="" class="active">
        <img
          class="access-button"
          data-src="assets/component-ac.png"
          alt="Conteúdo acessível em libras usando o VLibras Widget com opções dos Avatares Ícaro ou Hozana."
          src="https://vlibras.gov.br/app/assets/component-ac.png"
        />
        <img
          class="pop-up"
          data-src="assets/popup.png"
          alt="Conteúdo acessível em libras usando o VLibras Widget com opções dos Avatares Ícaro ou Hozana."
          src="https://vlibras.gov.br/app/assets/popup.png"
        />
      </div>
      <div vw-plugin-wrapper="">
        <div vp="">
          <div vp-box=""></div>
          <div vp-message-box=""></div>
          <div vp-settings=""></div>
          <div vp-settings-btn=""></div>
          <div vp-info-screen=""></div>
          <div vp-dictionary=""></div>
          <div vp-suggestion-screen=""></div>
          <div vp-suggestion-button=""></div>
          <div vp-rate-box=""></div>
          <div vp-rate-button=""></div>
          <div vp-controls=""></div>
          <div vp-change-avatar=""></div>
        </div>
      </div>
    </div>
  );
}

export default LibrasButton;
