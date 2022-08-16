import styled from 'styled-components';

interface ButtonProps {
  outlined?: boolean;
}

export const ButtonWrapper = styled.button<ButtonProps>`
  height: 40px;

  color: ${(props) => props.outlined ? 'var(--primary-yellow-orange)' : 'var(--white)'};
  background: ${(props) => props.outlined ? 'var(--white)' : 'var(--primary-yellow-orange)'};
  border: 1px solid ${(props) => props.outlined ? 'var(--primary-yellow-orange)' : 'none'};
  border-radius: 5px;
  
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    ${(props) => !props.outlined && 'filter: brightness(90%)'}
    color: ${(props) => props.outlined && 'var(--white)'};
    background: ${(props) => props.outlined ? 'var(--primary-yellow-orange)' : 'var(--primary-pumpkin)'};
  }
`;