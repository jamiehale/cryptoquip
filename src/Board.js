import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import UnstyledWord from './Word';

const Word = styled(UnstyledWord)``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Word} {
    margin-right: 16px;
    margin-bottom: 16px;
  }
`;

const Board = ({
  puzzle,
  puzzleKey,
}) => {
  const puzzleWords = R.split(' ', puzzle);

  const words = R.addIndex(R.map)(
    (word, i) => <Word key={i} word={word} puzzleKey={puzzleKey} />,
    puzzleWords,
  );

  return (
    <Container>{words}</Container>
  );
};

export default Board;
