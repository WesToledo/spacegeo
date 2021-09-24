import React, { useEffect, useState, useRef } from "react";
import { OBJModel } from "react-3d-viewer";
import { Tick, MTLModel } from "react-3d-viewer";
import { Grid, Text, Form, Button } from "tabler-react";

import api from "~/services/api";
import useStore from "~/store";

export default function List3DCards({ objects, setSelected, selected }) {
  const ref = useRef(null);
  const [elementsWidth, setElementsWidths] = useState(null);

  useEffect(() => {
    setElementsWidths(ref.current ? ref.current.offsetWidth : 0);
    console.log(elementsWidth);
  }, [ref.current]);

  function handleSelectObject(e) {
    console.log(objects.find((obj) => obj.obj == e.target.value));
    setSelected(objects.find((obj) => obj.obj == e.target.value));
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
              checked={selected && selected.obj == obj.obj}
              label={obj.name}
              name="model"
              value={obj.obj}
              onChange={handleSelectObject}
            />
            {elementsWidth && (
              <MTLModel
                enableZoom={true}
                mtl={`${obj.path}.mtl`}
                src={`${obj.path}.obj`}
                width={elementsWidth / 3 - 40}
                height={elementsWidth / 3 - 40}
              />
            )}
          </div>
        ))}
      </div>
    </Form.Group>
  );
}
