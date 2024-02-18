// App.js
import React from 'react';
import VideoPlayer from './Components/VideoPlayer';
import Playlist from './Components/Playlist';
import { VideoProvider } from './Context/VideoContext';
import './App.css'; // Assuming you have your Tailwind CSS or styled-components setup

function App() {
  return (
    <VideoProvider>
      <div className="container">
        <VideoPlayer />
        <Playlist />
      </div>
    </VideoProvider>
  );
}

export default App;
