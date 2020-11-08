import React from 'react';
import Stack from './Stack';
import Letter from './Letter';

const Pair = ({
  letter,
  solution,
}) => (
  <Stack spacing={1}>
    <Letter outlined>{letter}</Letter>
    <Letter>{solution}</Letter>
  </Stack>
);

export default Pair;
