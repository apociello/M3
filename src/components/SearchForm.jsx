import { useState } from 'react';
import '../styles/SearchForm.css';

function SearchForm({ onSearch }) {
  const [text, setText] = useState('');
  const username = text.trim().toLowerCase();

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(username);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Chess.com username, e.g. hikaru"
        aria-label="Chess.com username"
        autoComplete="off"
        spellCheck={false}
      />
      <button type="submit" disabled={username === ''}>
        Scout
      </button>
    </form>
  );
}

export default SearchForm;
