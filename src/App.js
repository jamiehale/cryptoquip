import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import useGameInput from './game-input';
import usePuzzleKey from './puzzle-key';
import Board from './Board';
import UserInput from './UserInput';

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
      <UserInput settingLetter={settingLetter} />
    )}
    <Board puzzle={puzzle} puzzleKey={puzzleKey} />
    <Button color="secondary" onClick={handleClick}>Reset</Button>
    </>
  );
};

export default App;
