import React, { useState } from "react";

import Dropzone from "react-dropzone";
import { CircularProgressbar } from "react-circular-progressbar";
import { Grid } from "tabler-react";
import { DropContainer, UploadMessage } from "./styles";

export default function DropZone({ setSelectedImg, selectedImg }) {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste e solte a imagem aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Imagem enviada</UploadMessage>;
  };

  const [preview, setPreview] = useState(selectedImg);

  console.log("dropzone img received", selectedImg);

  function onUpload(file) {
    setSelectedImg({ file: file[0], name: file[0].name });
    console.log(file[0]);
    setPreview(URL.createObjectURL(file[0]));
  }

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "200px",
        alignSelf: "center",
      }}
    >
      {preview == null ? (
        <Grid.Row>
          <Grid.Col>
            <Dropzone
              accept="image/*"
              onDropAccepted={onUpload}
              onDropRejected={() => console.log("fuck")}
            >
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragReject,
              }) => (
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
          </Grid.Col>
        </Grid.Row>
      ) : (
        <img src={preview} />
      )}

      {/* <CircularProgressbar
        styles={{
          root: { width: "30" },
          path: { stroke: "blue" },
        }}
        strokeWidth={10}
        value={16}
      /> */}
    </div>
  );
}
