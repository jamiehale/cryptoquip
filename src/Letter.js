import styled from 'styled-components';

const Letter = styled(({ outlined, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 1.1em;
  height: 3ex;
  padding: 0px;

  border: 1px solid ${({ outlined }) => (outlined ? 'black' : 'transparent')};
  border-radius: 4px;
`;

export default Letter;
