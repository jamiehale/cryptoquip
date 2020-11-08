import React from 'react';
import Stack from './Stack';
import Letter from './Letter';

const UserInput = ({
  settingLetter,
}) => (
  <Stack horizontal>
    <Letter outlined>{settingLetter}</Letter>
    <p>=</p>
  </Stack>
);

export default UserInput;
