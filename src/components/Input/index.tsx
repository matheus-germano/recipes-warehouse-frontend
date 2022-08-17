import { InputComponent } from './styles';

interface InputProps {
  [x: string]: any;
}

export function Input({ ...props }: InputProps) {
  return (
    <InputComponent {...props} />
  );
}