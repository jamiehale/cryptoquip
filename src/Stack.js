import React from 'react';
import styled from 'styled-components';

const Stack = styled(({ horizontal, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: ${({ horizontal }) => horizontal ? 'row' : 'column'};

  > * {
    padding-top: 8px;
  }
`;

export default Stack;
