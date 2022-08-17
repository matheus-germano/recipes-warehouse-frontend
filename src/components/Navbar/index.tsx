import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../Button';

import { Nav, NavbarWrapper, Logo, NavbarMenu, MenuItem, Buttons } from './styles';

import diet from '../../assets/images/diet.png';

export function Navbar() {
  const navigate = useNavigate();

  const [isPageScrolled, setIsPageScrolled] = useState(false);

  function checkIsPageScrolled() {
    window.scrollY >= 90 ? setIsPageScrolled(true) : setIsPageScrolled(false);
  }

  window.addEventListener('scroll', checkIsPageScrolled);

  return (
    <Nav isPageScrolled={isPageScrolled}>
      <NavbarWrapper>
        <Logo onClick={() => navigate('/')}>
          <h1>RECIPES</h1>
          <img src={diet} alt="Recipes Warehouse" />
        </Logo>

        <NavbarMenu>
          <MenuItem>
            <Link to='/'>Inicio</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/recipes'>Receitas</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/help'>Ajuda</Link>
          </MenuItem>
        </NavbarMenu>

        <Buttons>
          <Button onClick={() => navigate('/sign-in')}>Entrar</Button>
          <Button outlined={true} onClick={() => navigate('/sign-up')}>Cadastre-se</Button>
        </Buttons>
      </NavbarWrapper>
    </Nav>
  );
}