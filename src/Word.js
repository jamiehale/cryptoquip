import React from 'react';
import * as R from 'ramda';
import Stack from './Stack';
import Pair from './Pair';
  
const Word = ({
  className,
  word,
  letterMap,
}) => {
  const pairs = R.addIndex(R.map)(
    (letter, i) => <Pair key={i} letter={letter} solution={R.propOr(letter, letter, letterMap)} />,
    word,
  );

  return (
    <Stack horizontal className={className}>
      {pairs}
    </Stack>
  );
};

export default Word;
