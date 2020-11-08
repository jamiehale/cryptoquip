import React from 'react';
import * as R from 'ramda';
import Stack from './Stack';
import Pair from './Pair';
import { isLetter } from './letters';

const solutionFor = (letter, letterMap) => R.when(isLetter, R.propOr(' ', R.__, letterMap))(letter);

const Word = ({
  className,
  word,
  letterMap,
}) => {
  const pairs = R.addIndex(R.map)(
    (letter, i) => <Pair key={i} letter={letter} solution={solutionFor(letter, letterMap)} />,
    word,
  );

  return (
    <Stack horizontal className={className}>
      {pairs}
    </Stack>
  );
};

export default Word;
