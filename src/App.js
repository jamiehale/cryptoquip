import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

const puzzle = 'az uiwaoys urwlyl, tuio sr nrw dikk lyol re loygl kyiszam wg or uzmuyb ekrrbl? ldiby-tinl.';

const letters = 'abcdefghijklmnopqrstuvwxyz';

const isLetter = (c) => R.includes(c, letters);

const transformed = (puzzle, letterMap) => R.map(
  R.when(
    isLetter,
    (c) => R.propOr(' ', c, letterMap),
  ),
  puzzle,
);

const Letter = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Stack = styled(({ horizontal, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: ${({ horizontal }) => horizontal ? 'row' : 'column'};

  > * {
    padding-top: 8px;
  }
`;

const Pair = ({
  letter,
  solution,
}) => (
  <Stack>
    <Letter>{letter}</Letter>
    <Letter>{solution}</Letter>
  </Stack>
);
  
const UnstyledWord = ({
  className,
  word,
  letterMap,
}) => {
  const pairs = R.addIndex(R.map)(
    (letter, i) => <Pair key={i} letter={letter} solution={R.propOr(' ', letter, letterMap)} />,
    word,
  );

  return (
    <Stack horizontal className={className}>
      {pairs}
    </Stack>
  );
};

const Word = styled(UnstyledWord)``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Word} {
    margin-right: 32px;
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
    <p>I have a ham radio</p>
    <p>{puzzle}</p>
    <p>{board}</p>
    <Container>{words}</Container>
    </>
  );
};

export default App;
