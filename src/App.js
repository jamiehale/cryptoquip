import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import UnstyledWord from './Word';

const puzzle = 'az uiwaoys urwlyl, tuio sr nrw dikk lyol re loygl kyiszam wg or uzmuyb ekrrbl? ldiby-tinl.';

const letters = 'abcdefghijklmnopqrstuvwxyz';

const isLetter = R.includes(R.__, letters);

const transformed = (puzzle, letterMap) => R.map(
  R.when(
    isLetter,
    R.propOr(' ', R.__, letterMap),
  ),
  puzzle,
);

const Word = styled(UnstyledWord)``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Word} {
    margin-right: 16px;
  }
`;

const App = () => {
  const letterMap = {
    u: 'h',
  };
  const puzzleWords = R.split(' ', puzzle);
  console.log({ puzzleWords });
  const board = transformed(puzzle, letterMap);

  const words = R.addIndex(R.map)(
    (word, i) => <Word key={i} word={word} letterMap={letterMap} />,
    puzzleWords,
  );

  return (
    <>
    <p>{puzzle}</p>
    <p>{board}</p>
    <Container>{words}</Container>
    </>
  );
};

export default App;
