import { useState } from "react";
import { Button } from "../../components/Button";

import { Input } from "../../components/Input";

import { Form, FormControl, SignUpWrapper } from "./styles";

export function SignUp() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  function signUpUser(e: any) {
    e.preventDefault();
  }

  function convertImageToBase64(e: any) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }

  return (
    <SignUpWrapper>
      <Form>
        <h2>Cadastre-se</h2>
        <FormControl>
          <label htmlFor="">Foto de perfil</label>
          <Input
            type='file'
            accept="image/*"
            onChange={convertImageToBase64}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="">Nome completo</label>
          <Input
            type='text'
            value={name}
            onChange={(e: any) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <label htmlFor="">CPF</label>
          <Input
            type='text'
            value={id}
            onChange={(e: any) => setId(e.target.value)} />
        </FormControl>
        <FormControl>
          <label htmlFor="">E-mail</label>
          <Input
            type='text'
            value={email}
            onChange={(e: any) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <label htmlFor="">Senha</label>
          <Input
            type='text'
            value={password}
            onChange={(e: any) => setPassword(e.target.value)} />
        </FormControl>

        <Button onClick={signUpUser}>Cadastrar</Button>
      </Form>
    </SignUpWrapper>
  );
}