// context/FavoritesContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FavoritesContextProps {
  favorites: any[];
  addFavorite: (video: any) => void;
  removeFavorite: (video: any) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<any[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (video: any) => {
    setFavorites((prevFavorites) => [...prevFavorites, video]);
  };

  const removeFavorite = (video: any) => {
    setFavorites((prevFavorites) => prevFavorites.filter(fav => fav.id.videoId !== video.id.videoId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
