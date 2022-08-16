import { Link } from 'react-router-dom';

import { Button } from '../Button';

import { Nav, NavbarWrapper, Logo, NavbarMenu, MenuItem, Buttons } from './styles';

import warehouse from '../../assets/images/warehouse.png';

export function Navbar() {
  return (
    <Nav>
      <NavbarWrapper>
        <Logo>
          <h1>RECIPES</h1>
          <img src={warehouse} alt="Recipes Warehouse" />
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
          <Button text="Entrar" />
          <Button text="Cadastrar" outlined={true} />
        </Buttons>
      </NavbarWrapper>
    </Nav>
  );
}