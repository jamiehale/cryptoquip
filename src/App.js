import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import useEventListener from '@use-it/event-listener';
import UnstyledWord from './Word';
import Stack from './Stack';
import Letter from './Letter';
import letters, { isLetter } from './letters';

// const puzzle = 'za uiwaoys urwlyl, tuio sr nrw dikk lyol re loygl kyiszam wg or uzmuyb ekrrbl? ldiby-tinl.';
// const clues = { u: 'h' };

const puzzle = 'xbvrgige jsusxsfmr vdiv nvigvn "vs odrrnr sg usv vs odrrnr, vdiv bn vdr pmrnvbsu": sjrxrv\'n nsxbxspme.';
const clues = { o: 'c' };

const transformed = (puzzle, letterMap) => R.map(
  R.when(
    isLetter,
    R.prop(R.__, letterMap),
  ),
  puzzle,
);

const Word = styled(UnstyledWord)``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Word} {
    margin-right: 16px;
    margin-bottom: 16px;
  }
`;

const App = () => {
  const [settingLetter, setSettingLetter] = useState(null);
  const [letterMap, setLetterMap] = useState(clues);
  console.log({ letterMap });

  const puzzleWords = R.split(' ', puzzle);
  const board = transformed(puzzle, letterMap);
  console.log({ board });

  const words = R.addIndex(R.map)(
    (word, i) => <Word key={i} word={word} letterMap={letterMap} />,
    puzzleWords,
  );

  console.log({ words });

  const handleKeyDown = useCallback((event) => {
    if (settingLetter) {
      if (R.includes(event.key, letters)) {
        setLetterMap(R.assoc(settingLetter, event.key, letterMap));
        setSettingLetter(null);
      } else if (event.key === ' ') {
        setLetterMap(R.dissoc(settingLetter, letterMap));
        setSettingLetter(null);
      }
    } else {
      if (R.includes(event.key, letters)) {
        setSettingLetter(event.key);
      }
    }
  }, [settingLetter, setSettingLetter, letterMap, setLetterMap]);

  useEventListener('keydown', handleKeyDown);

  const handleClick = useCallback(() => {
    setLetterMap(clues);
  }, [setLetterMap]);

  return (
    <>
    <p>{puzzle}</p>
    <p>{board}</p>
    {settingLetter && (
      <Stack horizontal>
        <Letter outlined>{settingLetter}</Letter>
        <p>=</p>
      </Stack>
    )}
    <Container>{words}</Container>
    <button onClick={handleClick}>Reset</button>
    </>
  );
};

export default App;
