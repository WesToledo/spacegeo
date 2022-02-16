import React, { useState } from "react";

import Dropzone from "react-dropzone";
import { CircularProgressbar } from "react-circular-progressbar";
import { Grid } from "tabler-react";
import { DropContainer, UploadMessage } from "./styles";

export default function Upload() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste e solte a imagem aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Imagem enviada</UploadMessage>;
  };

  function onUpload(file) {
    const preview = URL.createObjectURL(file[0]);
    setUploadedImage(preview);
  }

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "200px",
        alignSelf: "center",
      }}
    >
      {uploadedImage == null ? (
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
        <img src={uploadedImage} />
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
