import React from 'react';
import styled from 'styled-components';

const Stack = styled(({ horizontal, spacing, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: ${({ horizontal }) => horizontal ? 'row' : 'column'};

  * + * {
    ${({ horizontal, spacing }) => (horizontal ? `margin-left: ${spacing * 8}px` : `margin-top: ${spacing * 8}px`)};
  }
`;

export default Stack;
