import React from 'react';
import Stack from './Stack';
import Letter from './Letter';

const Pair = ({
  letter,
  solution,
}) => (
  <Stack>
    <Letter>{letter}</Letter>
    <Letter>{solution}</Letter>
  </Stack>
);

export default Pair;
