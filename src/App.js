import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Stack from './Stack';
import Letter from './Letter';
import useGameInput from './game-input';
import usePuzzleKey from './puzzle-key';
import Board from './Board';

// const puzzle = 'za uiwaoys urwlyl, tuio sr nrw dikk lyol re loygl kyiszam wg or uzmuyb ekrrbl? ldiby-tinl.';
// const clues = { u: 'h' };

const puzzle = 'xbvrgige jsusxsfmr vdiv nvigvn "vs odrrnr sg usv vs odrrnr, vdiv bn vdr pmrnvbsu": sjrxrv\'n nsxbxspme.';
const clues = { o: 'c' };

const App = () => {
  const { puzzleKey, reset, set, clear } = usePuzzleKey();
  const { settingLetter } = useGameInput(set, clear);

  const handleClick = useCallback(() => {
    reset(clues);
  }, [reset]);

  return (
    <>
    {settingLetter && (
      <Stack horizontal>
        <Letter outlined>{settingLetter}</Letter>
        <p>=</p>
      </Stack>
    )}
    <Board puzzle={puzzle} puzzleKey={puzzleKey} />
    <Button color="secondary" onClick={handleClick}>Reset</Button>
    </>
  );
};

export default App;
