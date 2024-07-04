import React from 'react';
import { searchVideos } from '../api/youtube';
import VideoItem from '../components/VideoItem';
import { useSearch } from '../context/SearchContext';
import { useFavorites } from '../context/FavoritesContext';

const VideosPage: React.FC = () => {
  const { query, setQuery, videos, setVideos } = useSearch();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleSearch = async () => {
    const results = await searchVideos(query);
    setVideos(results);
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
            onFavorite={addFavorite} 
            onUnfavorite={removeFavorite} 
          />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
