import { SignIn } from "../SignIn";
import { Recipe } from "../../components/Recipe";

import { useFetch } from "../../hooks/useFetch";

import { Container, HomeHeaderContainer, HomeHeader, HeaderImage, FeaturedRecipes, RecipesWrapper, NoFeaturedRecipes } from "./styles";

import drool from '../../assets/images/emoji-drool.gif';
import crying from '../../assets/images/crying-emoji.gif';
import food from '../../assets/images/food.png';

interface RecipeProps {
  id: number;
  name: string;
  type: number;
  description: string;
  image: string;
  preparationMethod: string;
  likes: number;
  createdBy: string;
  isRecipeOwner: boolean;
  createdAt: Date;
}

export function Home() {
  const { data: recipes } = useFetch('recipes', '/v1/recipes');

  return (
    <Container>
      <HomeHeaderContainer>
        <HomeHeader>
          <h1>
            Encontre ou crie <span>receitas deliciosas</span> que atendam a sua vontade
            <img src={drool} alt="" />
          </h1>
          <HeaderImage>
            <div />
            <img src={food} alt="" style={{ zIndex: 999 }} />
          </HeaderImage>
        </HomeHeader>
      </HomeHeaderContainer>
      <FeaturedRecipes>
        <h1>Em destaque</h1>
        <RecipesWrapper>
          {
            recipes && recipes.data ? recipes.data.map((recipe: RecipeProps) => (
              <Recipe key={recipe.id} recipe={recipe} />
            )) : (
              <NoFeaturedRecipes>
                <img src={crying} alt="" />
                <p>Sem destaques no momento</p>
              </NoFeaturedRecipes>
            )
          }
        </RecipesWrapper>
      </FeaturedRecipes>
      <SignIn />
    </Container>
  );
}