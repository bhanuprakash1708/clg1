import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/video1.mp4';

function VideoPlayer({ playstate, setplaystate }) {
  const player = useRef(null);

  const closePlayer = (e) => {
    // Ensure the event is triggered only when clicking outside the video element
    if (e.target === player.current) {
      setplaystate(false);
    }
  };

  return (
    <div
      className={`video-player ${playstate ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;