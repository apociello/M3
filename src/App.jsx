import { useState } from 'react';
import { getPlayer } from './api.js';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import PlayerCard from './components/PlayerCard.jsx';
import SearchForm from './components/SearchForm.jsx';
import Status from './components/Status.jsx';
import useFetch from './hooks/useFetch.js';
import './styles/App.css';

function App() {
  const [username, setUsername] = useState('');
  const { data: player, error, loading } = useFetch(getPlayer, username);

  return (
    <>
      <Header />
      <main className="container">
        <SearchForm onSearch={setUsername} />
        {loading && <Status kind="loading">Scouting {username}…</Status>}
        {error && <Status kind="error">{error.message}</Status>}
        {player && <PlayerCard player={player} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
