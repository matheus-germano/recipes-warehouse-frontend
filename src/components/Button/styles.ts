import styled from 'styled-components';

interface ButtonProps {
  outlined?: boolean;
}

export const ButtonWrapper = styled.div`
  button {
    height: 40px;

    color: ${(props: ButtonProps) => props.outlined ? 'var(--primary-yellow-orange)' : 'var(--white)'};
    background: ${(props: ButtonProps) => props.outlined ? 'var(--white)' : 'var(--primary-yellow-orange)'};
    border: 1px solid ${(props: ButtonProps) => props.outlined ? 'var(--primary-yellow-orange)' : 'none'};
    border-radius: 5px;
    
    padding: 0 20px;
    cursor: pointer;
  }
`;