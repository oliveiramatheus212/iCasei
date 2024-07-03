import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FavoritesProviderProps {
  children: ReactNode;
}

interface FavoritesContextType {
  favorites: any[];
  addFavorite: (video: any) => void;
  removeFavorite: (video: any) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addFavorite = (video: any) => {
    setFavorites((prevFavorites) => [...prevFavorites, video]);
  };

  const removeFavorite = (video: any) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id.videoId !== video.id.videoId)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
