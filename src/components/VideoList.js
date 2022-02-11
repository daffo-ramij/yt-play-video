import React from 'react';
import VideoItem from './VideoItem';

const Videol = ({ videos, onVideoSelect }) => {
  const ListVideoItem = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{ListVideoItem}</div>;
};

export default Videol;
