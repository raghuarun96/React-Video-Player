// components/VideoPlayer.js
import React, {useState , useContext , useRef } from 'react';
import { VideoContext } from '../Context/VideoContext';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';

const VideoPlayer = () => {
  const {
    currentVideo,
    setPlaybackTime,
    playbackTime,
    duration,
    setDuration,
    setPlaybackSpeed,
    playbackSpeed,
  } = useContext(VideoContext);

  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleTimeUpdate = () => {
    setPlaybackTime(videoRef.current.currentTime);
  };

  const handleDurationChange = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    setPlaybackTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleSpeedChange = (e) => {
    const speed = e.target.value;
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = parseFloat(speed);
    }
  };

  
  return (
    <div className="video-player">
      <h2>React Video Player</h2>

        <video
        ref={videoRef}
        style={{ width: "100%", height: "100%" }}
        src={currentVideo.url}
        autoPlay={isPlaying}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
      ></video>

      <div className="toggle-container">
        <div className="timer-progress">
        <input
          type="range"
          min={0}
          max={duration}
          value={playbackTime}
          onChange={handleSeek}
        />
        </div>
        <div className="flex-container"> 
        <button onClick={togglePlay}>{isPlaying ? <span><PauseOutlinedIcon/></span> : <span><PlayArrowOutlinedIcon/></span>}</button>
        <p>
          {formatTime(playbackTime)} / {formatTime(duration)}
        </p>
        <select onChange={handleSpeedChange}
          value={playbackSpeed}>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
