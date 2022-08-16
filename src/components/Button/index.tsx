import { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './styles';

interface ButtonProps {
  outlined?: boolean;
  children: React.ReactNode;
  [x: string]: any;
}

export function Button({ children, outlined, ...props }: ButtonProps) {
  return (
    <ButtonWrapper {...props} outlined={outlined}>
      {children}
    </ButtonWrapper>
  );
}