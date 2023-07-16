import React, { useEffect, useRef, useState } from "react";
import "./HeroImage.css";
import { VolumeOn, VolumeOff } from "./Betflix-Icon-Pack";

const HeroImage = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isMuteButtonHovered, setIsMuteButtonHovered] = useState(false);
  const [isPlayButtonHovered, setIsPlayButtonHovered] = useState(false);
  const [isMyListButtonHovered, setIsMyListButtonHovered] = useState(false);

  useEffect(() => {
    // Auto play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleToggleMute = () => {
    // Toggle the mute state and update the video's muted property
    setMuted(!muted);
    videoRef.current.muted = !muted;
  };

  const handleOpenFullscreen = () => {
    // Open the video in fullscreen mode
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleMyListButtonClick = () => {
    alert("Added to My List");
  };

  const handleMuteButtonMouseEnter = () => {
    setIsMuteButtonHovered(true);
  };

  const handleMuteButtonMouseLeave = () => {
    setIsMuteButtonHovered(false);
  };

  const handlePlayButtonMouseEnter = () => {
    setIsPlayButtonHovered(true);
  };

  const handlePlayButtonMouseLeave = () => {
    setIsPlayButtonHovered(false);
  };

  const handleMyListButtonMouseEnter = () => {
    setIsMyListButtonHovered(true);
  };

  const handleMyListButtonMouseLeave = () => {
    setIsMyListButtonHovered(false);
  };

  return (

    <div className="video-container">
      <video
        ref={videoRef}
        width="100%"
        height="657"
        autoPlay
        muted={muted}
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        style={{
          border: 'none',
          outline: 'none',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          marginTop: '-32px',
        }}
      >
        <source src="/Dune Part 2 Trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        className={`mute-button circle ${isMuteButtonHovered ? 'hovered' : ''}`}
        onClick={handleToggleMute}
        onMouseEnter={handleMuteButtonMouseEnter}
        onMouseLeave={handleMuteButtonMouseLeave}
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '50px',
          padding: '10px',
          width: '40px',
          height: '40px',
          backgroundColor: 'transparent',
          color: '#fff',
          border: isMuteButtonHovered ? '1px solid white' : '1px solid rgba(217, 217, 217, 0.25)',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border 0.3s ease, opacity 0.3s ease',
        }}
      >
        {muted ? <VolumeOff /> : <VolumeOn />}
      </button>
      <button
        className={`play-button ${isPlayButtonHovered ? 'hovered' : ''}`}
        onClick={handleOpenFullscreen}
        onMouseEnter={handlePlayButtonMouseEnter}
        onMouseLeave={handlePlayButtonMouseLeave}
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '50px',
          padding: '10px',
          width: '111px',
          height: '40px',
          backgroundColor: isPlayButtonHovered ? '#fff' : 'rgba(217, 217, 217, 0.25)',
          color: '#fff',
          border: 'none',
          borderRadius: '7%',
          cursor: 'pointer',
          zIndex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <span className="play-text">Play</span>
      </button>
      <button
        className={`my-list-button ${isMyListButtonHovered ? 'hovered' : ''}`}
        onClick={handleMyListButtonClick}
        onMouseEnter={handleMyListButtonMouseEnter}
        onMouseLeave={handleMyListButtonMouseLeave}
        style={{
          color: '#fff',
          backgroundColor: isMyListButtonHovered ? '#fff' : 'rgba(217, 217, 217, 0.25)',
          border: 'none',
          borderRadius: '7%',
          padding: '10px',
          width: '111px',
          height: '40px',
          position: 'absolute',
          bottom: '80px',
          left: '175px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease',
        }}
      >
        <span className="list-text">+ My List</span>
      </button>
    </div>
  );
};

export default HeroImage;
