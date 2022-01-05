import React, { useEffect } from "react";
import cross from "../../Assets/cross.png";
import ReactPlayer from "react-player/youtube";

import "./VideoModal.css";
const VideoModal = ({ changeStateF, videoUrl }) => {
  console.log(videoUrl?.results);
  return (
    <div className="mainClass">
      <div className="subClass">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${
            videoUrl?.results[videoUrl?.results?.length - 1]?.key
          }`}
          height="100%"
          width="100%"
        />

        <button onClick={() => changeStateF((prev) => !prev)} className="cross">
          <img src={cross} />
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
