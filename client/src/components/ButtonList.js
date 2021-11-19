import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import LibrasButton from "~/components/LibrasButton";

import { Button } from "tabler-react";

const soundIcon = require("../assets/img/som.jpg");
const raIcon = require("../assets/img/ra.jpg");

function ButtonList(
  { video, objName, audio, setCurrentVideo, setOpen, shouldDisplayRA = true },
  props
) {
  const [isAudioVisible, setIsAudioVisible] = useState(false);

  function handleOpenAudio() {
    setIsAudioVisible(!isAudioVisible);
  }
  let history = useHistory();

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <input
        type="image"
        src={soundIcon}
        style={{ width: "38px", height: "38px", marginRight: "0.5em" }}
        onClick={handleOpenAudio}
      />

      {isAudioVisible && (
        <audio controls style={{ width: "13rem", height: "30px" }}>
          <source src={audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
      <LibrasButton
        onClick={() => {
          setOpen(true);
          setCurrentVideo(video);
        }}
      />

      {/* <input
        type="image"
        src={raIcon}
        style={{ width: "38px", height: "38px", marginRight: "0.5em" }}
        onClick={() => {
          history.push(`/ra.html?obj=${objName}`);
        }}
      /> */}

      {shouldDisplayRA && (
        <Button
          icon="box"
          color="primary"
          RootComponent="a"
          href={`/ra.html?obj=${objName}`}
          className="text-white m-1"
        >
          Ver em RA
        </Button>
      )}
    </li>
  );
}

export default ButtonList;
