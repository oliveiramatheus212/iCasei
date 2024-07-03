// pages/Videos.tsx
import React, { useState, useEffect } from 'react';
import { searchVideos } from '../api/youtube';
import VideoItem from '../components/VideoItem';

const VideosPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async () => {
    const results = await searchVideos(query);
    setVideos(results);
  };

  const handleFavorite = (video: any) => {
    setFavorites([...favorites, video]);
  };

  const handleUnfavorite = (video: any) => {
    setFavorites(favorites.filter(fav => fav.id.videoId !== video.id.videoId));
  };

  const isFavorite = (video: any) => {
    return favorites.some(fav => fav.id.videoId === video.id.videoId);
  };

  return (
    <div>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2"
          placeholder="Search for videos..."
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 ml-2">
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {videos.map((video) => (
          <VideoItem 
            key={video.id.videoId} 
            video={video} 
            isFavorite={isFavorite(video)} 
            onFavorite={handleFavorite} 
            onUnfavorite={handleUnfavorite} 
          />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
