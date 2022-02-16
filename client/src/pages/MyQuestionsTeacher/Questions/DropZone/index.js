import React, { Component } from "react";

import Dropzone from "react-dropzone";
import { CircularProgressbar } from "react-circular-progressbar";

import { DropContainer, UploadMessage } from "./styles";

export default function Upload() {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste e solte a imagem aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Imagem enviada</UploadMessage>;
  };

  function onUpload(files) {
    console.log(files);
  }

  return (
    <>
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>

      <CircularProgressbar
        styles={{
          root: { width: "30" },
          path: { stroke: "blue" },
        }}
        strokeWidth={10}
        value={16}
      />
    </>
  );
}
