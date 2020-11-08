import { useState, useCallback } from 'react';
import * as R from 'ramda';

const usePuzzleKey = () => {
  const [puzzleKey, setPuzzleKey] = useState({});

  const reset = useCallback((clues) => {
    setPuzzleKey(clues);
  }, [setPuzzleKey]);

  const set = useCallback((key, value) => {
    setPuzzleKey(R.assoc(key, value, puzzleKey));
  }, [puzzleKey, setPuzzleKey]);

  const clear = useCallback((key) => {
    setPuzzleKey(R.dissoc(key, puzzleKey));
  }, [puzzleKey, setPuzzleKey]);

  return {
    puzzleKey,
    reset,
    set,
    clear,
  };
};

export default usePuzzleKey;
