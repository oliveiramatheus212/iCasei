// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import VideosPage from './pages/Videos';
import Favorites from './pages/Favorites';

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <Router>
        <nav className="bg-blue-500 p-4 text-white">
          <Link to="/" className="mr-4">Videos</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<VideosPage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
