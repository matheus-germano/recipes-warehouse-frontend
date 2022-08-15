import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 0 10px;

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