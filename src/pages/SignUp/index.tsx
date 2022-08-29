import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { cpf } from 'cpf-cnpj-validator';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import { IoMdHelpCircleOutline } from "react-icons/io";
import axios from "axios";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Form, FormControl, SignUpWrapper } from "./styles";

export function SignUp() {
  let navigate = useNavigate();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState<string | null | ArrayBuffer>('');

  function signUpUser(e: any) {
    e.preventDefault();

    if (id.trim() === '' || name.trim() === '' || email.trim() === '' || password.trim() === '') {
      toast.error('Preencha todos os campos!');
      return;
    }

    if (!cpf.isValid(id.trim())) {
      toast.error('CPF invalido!');
      return;
    }

    if (!password.trim().match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
      toast.error('Senha invalida!');
      return;
    }

    var data = JSON.stringify({
      "id": id,
      "name": name,
      "email": email,
      "password": btoa(password),
      "image": image
    });

    var config = {
      method: 'post',
      url: 'https://localhost:7264/v1/sign-up',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then((response) => {
        toast.success('Cadastrado com sucesso, faca o login!');
        navigate('sign-in');
      })
      .catch((error) => {
        error.response.data == 409 ? toast.error('Usuário com este CPF ja cadastrado!') : toast.error('Ocorreu um erro ao realizar o cadastro!');
      });
  }

  function convertImageToBase64(e: any) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.readAsDataURL(file);
    reader.onload = () => {
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
            type='email'
            value={email}
            onChange={(e: any) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <label htmlFor="">Senha</label>
            <Tippy content="Sua senha deve conter no mínimo 8 caracteres, com pelo menos uma letra, um numero e um caracter especial">
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IoMdHelpCircleOutline size={20} color={"#FE9920"} />
              </span>
            </Tippy>
          </div>
          <Input
            type='password'
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button onClick={signUpUser}>Cadastrar</Button>
        <p>Ja tem uma conta? <Link to='/sign-in'>Entre</Link></p>
      </Form>
    </SignUpWrapper>
  );
}