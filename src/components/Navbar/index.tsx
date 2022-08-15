import { Nav, NavbarWrapper, Logo, NavbarMenu } from './styles';

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

        </NavbarMenu>
      </NavbarWrapper>
    </Nav>
  );
}