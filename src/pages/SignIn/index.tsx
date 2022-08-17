import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { SignInContainer, Form, FormControl } from './styles';

import donut from '../../assets/images/donut.svg';
import axios from 'axios';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function signInUser(e: any) {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      toast.error('Preencha os campos corretamente');
      return;
    }

    setIsLoading(true);

    var data = JSON.stringify({
      "email": email,
      "password": password
    });

    var config = {
      method: 'post',
      url: 'https://localhost:7264/v1/signIn',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then((response) => {
        toast.success('Entrou com sucesso');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <SignInContainer>
      <aside>
        <img src={donut} alt='' />
        <img src={donut} alt='' />
        <h1>Entre na sua conta e desfrute de tudo que temos a oferecer.</h1>
      </aside>
      <main>
        <Form>
          <div style={{ width: '100%' }}>
            <h2>Bem vindo de volta</h2>
            <p>Preencha os campos corretamente</p>
          </div>
          <FormControl>
            <label htmlFor=''>E-mail</label>
            <Input
              type='text'
              placeholder='Seu e-mail'
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <label htmlFor=''>Senha</label>
            <Input
              type='password'
              placeholder='Sua senha'
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <Link to='/reset-password'>Esqueci minha senha</Link>
          </FormControl>
          <Button onClick={signInUser}>{isLoading ? 'Entrando...' : 'Entrar'}</Button>
          <hr />
          <p>Esqueceu sua senha? <Link to='/sign-up'>Cadastre-se</Link></p>
        </Form>
      </main>
    </SignInContainer>
  );
}