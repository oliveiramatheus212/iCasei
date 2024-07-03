// pages/Favorites.tsx
import React from 'react';
import VideoItem from '../components/VideoItem';
import { useFavorites } from '../context/FavoritesContext';

const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites();

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
              onFavorite={() => {}} 
              onUnfavorite={removeFavorite} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
