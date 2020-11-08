import React from 'react';
import * as R from 'ramda';
import Stack from './Stack';
import Pair from './Pair';
import { isLetter } from './letters';

const solutionFor = (letter, puzzleKey) => R.when(isLetter, R.propOr(' ', R.__, puzzleKey))(letter);

const Word = ({
  className,
  word,
  puzzleKey,
}) => {
  const pairs = R.addIndex(R.map)(
    (letter, i) => <Pair key={i} letter={letter} solution={solutionFor(letter, puzzleKey)} />,
    word,
  );

  return (
    <Stack horizontal className={className}>
      {pairs}
    </Stack>
  );
};

export default Word;
