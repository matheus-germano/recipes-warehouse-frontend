import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);

  margin: 0 auto;
`;

export const HomeHeaderContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeHeader = styled.div`
  width: 100%;
  max-width: 1300px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  h1 {
    max-width: 500px;
    font-size: 64px;
    font-weight: 900;

    span {
      background: linear-gradient(45deg, var(--secondary-yellow-orange), var(--primary-pumpkin));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    img {
      height: 100px;
      position: absolute;
      transform: translateX(20px);
    }
  }
`;

export const HeaderImage = styled.div`
  border-radius: 36% 64% 29% 71% / 58% 76% 24% 42%;
  background: linear-gradient(45deg, var(--secondary-yellow-orange), var(--primary-pumpkin));

  img {
    transform: rotate(-3deg);
  }
`;

export const FeaturedRecipes = styled.div`
  width: 100%;
  max-width: 1300px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 20px;
`;