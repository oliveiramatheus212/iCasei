import React, { useState } from 'react';
import VideoItem from '../components/VideoItem';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const handleFavorite = (video: any) => {
    if (!favorites.some((fav) => fav.id.videoId === video.id.videoId)) {
      setFavorites([...favorites, video]);
    }
  };

  const handleUnfavorite = (video: any) => {
    setFavorites(favorites.filter((fav) => fav.id.videoId !== video.id.videoId));
  };

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Favorite Videos</h2>
      <div className="flex flex-wrap justify-center">
        {favorites.length === 0 ? (
          <p>No favorite videos yet.</p>
        ) : (
          favorites.map((video) => (
            <VideoItem
              key={video.id.videoId}
              video={video}
              isFavorite={true}
              onFavorite={handleFavorite}
              onUnfavorite={handleUnfavorite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
