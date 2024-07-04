import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  query: string;
  setQuery: (query: string) => void;
  videos: any[];
  setVideos: (videos: any[]) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState<any[]>([]);

  return (
    <SearchContext.Provider value={{ query, setQuery, videos, setVideos }}>
      {children}
    </SearchContext.Provider>
  );
};
