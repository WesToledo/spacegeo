import React, { useEffect, useState, useRef } from "react";
import { OBJModel } from "react-3d-viewer";
import { Tick, MTLModel } from "react-3d-viewer";
import { Grid, Text, Form, Button } from "tabler-react";

import api from "~/services/api";
import useStore from "~/store";

export default function List3DCards({ objects, setSelected, type, selected }) {
  const ref = useRef(null);
  const [elementsWidth, setElementsWidths] = useState(null);

  console.log("selected received obj", selected);

  useEffect(() => {
    setElementsWidths(ref.current ? ref.current.offsetWidth : 0);
    console.log(elementsWidth);
  }, [ref.current]);

  function handleSelectObject(glb) {
    console.log(objects.find((obj) => obj.obj == glb));
    setSelected(objects.find((obj) => obj.obj == glb));
  }

  return (
    <Form.Group label="Objeto 3D">
      <div
        ref={ref}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {objects.map((obj, index) => (
          <div
            key={index}
            style={{
              width: elementsWidth / 3 - 20,
              border: "1px solid #ccc",
              padding: "10px",
              margin: "5px",
            }}
          >
            <Form.Radio
              key={index}
              checked={selected && selected.obj === obj.obj}
              label={" "}
              name="model"
              onChange={() => {
                handleSelectObject(obj.obj);
              }}
            />

            {elementsWidth && (
              // <MTLModel
              //   enableZoom={true}
              // mtl={`${obj.obj}.mtl`}
              // src={`${obj.obj}.obj`}
              // width={elementsWidth / 3 - 40}
              // height={elementsWidth / 3 - 40}
              // />
              <img
                src={`${process.env.REACT_APP_URL}/assets/img/${obj.img}`}
                width={elementsWidth / 3 - 40}
                style={{ padding: "1rem" }}
              />

              // <OBJModel src={obj.obj} texPath=""/>
            )}
          </div>
        ))}
      </div>
    </Form.Group>
  );
}
