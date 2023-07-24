import React from "react";
import "./videocard.css";
const VideoCard = (props) => {
  return (
    <div className="card">
      <div className="title">HI {props.title} {props.desc}</div>
      <div className="videoplayer">
        <video controls width="400px">
            <source src={props.source}></source>
        </video>
      </div>
    </div>
  );
};

export default VideoCard;
