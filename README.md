# Chess Scout

A Chess.com player scouting app built with React and Vite.

## Features

- Search any Chess.com player by username
- Profile with avatar, title, followers and link to Chess.com
- Current and best rating in bullet, blitz, rapid and daily
- Report of the last 30 days: wins, draws and losses, win rate as white and black
- List of the most recent games, linking to each game
- Loading, error and empty states
- API responses cached in localStorage for 10 minutes

## Built with

- React 19
- Vite
- CSS
- [Chess.com Published-Data API](https://www.chess.com/news/view/published-data-api)

## AI usage

This is a university project for a web development course built around
working with AI.

I rebuilt my previous project (M2, vanilla JavaScript) in React with Claude
Code. It helped me split the app into components, write the custom hook and
explain every React concept along the way. I reviewed and tested every change
before committing it, and dropped or changed the parts I didn't want.

## Autopsy

1. When a new search starts before the old one finishes, the old answer is
   just ignored (an `ignore` flag in the effect cleanup). I could cancel the
   request with `AbortController`, but I'd have to pass it through all of
   `api.js`, and ignoring it is enough.

2. Ratings, games and the report are calculated on every render from the
   player data, not stored in state or memoized with `useMemo`. It's fast
   enough, and the code stays simpler.
