import React from "react";
import demoVideo from "../../images/videoservices.mp4"; // si la vidéo est dans ton projet

const VideoPlayer = () => {
  return (
    <div className="w-full flex justify-center">
      <video 
        src={demoVideo} 
        controls 
        autoPlay={false} 
        className="w-[600px] rounded-lg shadow-lg"
      >
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;
