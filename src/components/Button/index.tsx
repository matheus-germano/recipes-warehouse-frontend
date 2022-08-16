import { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './styles';

interface ButtonProps extends React.ComponentProps<"button"> {
  text: string;
  outlined?: boolean;
  children?: React.ReactNode;
}

export function Button({ text, outlined, children, ...buttonProps }: ButtonProps) {
  return (
    <ButtonWrapper outlined={outlined}>
      <button {...buttonProps}>
        {text}
      </button>
    </ButtonWrapper>
  );
}