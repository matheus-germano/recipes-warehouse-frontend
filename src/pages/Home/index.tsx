import { Container, HomeHeaderContainer, HomeHeader, HeaderImage } from "./styles";

import emoji from '../../assets/images/emoji-drool.gif';
import food from '../../assets/images/food.png';

export function Home() {
  return (
    <Container>
      <HomeHeaderContainer>
        <HomeHeader>
          <h1>
            Encontre ou crie <span>receitas deliciosas</span> que atendam a sua vontade
            <img src={emoji} alt="" />
          </h1>
          <HeaderImage>
            <div />
            <img src={food} alt="" style={{ zIndex: 999 }} />
          </HeaderImage>
        </HomeHeader>
      </HomeHeaderContainer>
    </Container>
  );
}