import styled from 'styled-components';

export const InputComponent = styled.input`
  width: 100%;
  height: 40px;

  border-radius: 5px;
  border: 1px solid var(--grey);

  padding: 0 10px;

  &:focus {
    border: 1px solid var(--primary-yellow-orange);
  }
`;