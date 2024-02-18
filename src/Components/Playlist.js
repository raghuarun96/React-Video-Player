import React, { useContext, useState } from 'react';
import { VideoContext } from '../Context/VideoContext';

const Playlist = () => {
  const { playlist, setCurrentVideo, setPlaylist } = useContext(VideoContext);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index) => {
    if (draggedIndex === null) return;

    const updatedPlaylist = [...playlist];
    const [draggedItem] = updatedPlaylist.splice(draggedIndex, 1);
    updatedPlaylist.splice(index, 0, draggedItem);

    setPlaylist(updatedPlaylist);
    setDraggedIndex(null);
  };

  return (
    <div className="playlist">
      <ul>
        {playlist.map((video, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onClick={() => setCurrentVideo(video)}
          >
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
