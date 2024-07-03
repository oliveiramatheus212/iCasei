import React from 'react';
import YouTube from 'react-youtube';

interface VideoItemProps {
  video: any;
  isFavorite: boolean;
  onFavorite: (video: any) => void;
  onUnfavorite: (video: any) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, isFavorite, onFavorite, onUnfavorite }) => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      onUnfavorite(video);
    } else {
      onFavorite(video);
    }
  };

  return (
    <div className="border p-4 m-2">
      <YouTube videoId={video.id.videoId} opts={opts} />
      <button onClick={handleToggleFavorite} className="text-2xl">
        {isFavorite ? '⭐' : '☆'}
      </button>
    </div>
  );
};

export default VideoItem;
