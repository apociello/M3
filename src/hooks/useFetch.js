import { useEffect, useState } from 'react';

// Runs fetcher(arg) every time arg changes and returns { data, error, loading }.
// Nothing is fetched while arg is empty.
function useFetch(fetcher, arg) {
  // Last request that finished, tagged with the arg it was for
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!arg) return;

    let ignore = false;
    fetcher(arg)
      .then((data) => {
        if (!ignore) setResult({ arg, data, error: null });
      })
      .catch((error) => {
        if (!ignore) setResult({ arg, data: null, error });
      });

    // Cleanup: if arg changes before the answer arrives, that old answer is ignored
    return () => {
      ignore = true;
    };
  }, [fetcher, arg]);

  // Derived: if the last result isn't for the current arg, its request is still running
  const isCurrent = result?.arg === arg;
  return {
    data: isCurrent ? result.data : null,
    error: isCurrent ? result.error : null,
    loading: Boolean(arg) && !isCurrent,
  };
}

export default useFetch;
