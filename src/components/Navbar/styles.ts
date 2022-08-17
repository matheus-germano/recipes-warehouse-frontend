import styled from 'styled-components';

interface NavProps {
  isPageScrolled: boolean;
}

export const Nav = styled.nav<NavProps>`
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  transition: .3s;
  overflow: hidden;

  outline: ${props => props.isPageScrolled ? '1px solid var(--grey)' : '1px solid transparent'};
  backdrop-filter: ${props => props.isPageScrolled ? 'blur(4px)' : 'none'};
  background: ${props => props.isPageScrolled ? 'rgba(0, 0, 0, 0.05)' : 'none'};
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 1300px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;

  img {
    height: 39px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: var(--black);
  }
`;

export const NavbarMenu = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItem = styled.li`
  padding: 10px;

  a {
    font-weight: 600;
    text-decoration: none;
    color: var(--primary-yellow-orange);
  }

  transition: .2s;

  &:hover {
    transform: translateY(-10px);

    a {
      color: var(--primary-pumpkin);
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;