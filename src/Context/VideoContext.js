// context/VideoContext.js
import React, { createContext, useState } from 'react';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([
    { title: 'Traffic Camera', url: require('../Videos/sample.mp4') },
    { title: 'Stock Trading', url: require('../Videos/sample3.mp4') },
    { title: 'Panda', url: require('../Videos/sample4.mp4') },
    { title: 'Cartoon', url: require('../Videos/sample5.mp4') },
    { title: 'Trading Sample', url: require('../Videos/sample3.mp4') },

    // Add more videos as needed
  ]);
  const [currentVideo, setCurrentVideo] = useState(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackTime, setPlaybackTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <VideoContext.Provider
      value={{
        playlist,
        currentVideo,
        isPlaying,
        togglePlay,
        setPlaybackTime,
        playbackTime,
        duration,
        setPlaylist,
        setDuration,
        setPlaybackSpeed,
        playbackSpeed,
        setCurrentVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export { VideoContext, VideoProvider };
