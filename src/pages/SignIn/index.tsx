import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { SignInContainer, Form, FormControl } from './styles';

import donut from '../../assets/images/donut.svg';

export function SignIn() {
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
            <Input type='text' placeholder='Seu e-mail' />
          </FormControl>
          <FormControl>
            <label htmlFor=''>Senha</label>
            <Input type='password' placeholder='Sua senha' />
            <Link to='/reset-password'>Esqueci minha senha</Link>
          </FormControl>
          <Button>Entrar</Button>
          <hr />
          <p>Esqueceu sua senha? <Link to='/sign-up'>Cadastre-se</Link></p>
        </Form>
      </main>
    </SignInContainer>
  );
}