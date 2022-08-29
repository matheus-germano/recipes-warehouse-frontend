import { Recipe } from "../../components/Recipe";

import { useFetch } from "../../hooks/useFetch";
import { useUser } from "../../hooks/useUser";

import { NoRecipes, RecipesContainer, RecipesWrapper } from "./styles";

import crying from '../../assets/images/crying-emoji.gif';

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
  likedByUser: boolean;
}

interface LikedRecipeProps {
  userId: string;
  recipeId: number;
}

export function Recipes() {
  const { user } = useUser();

  const { data: recipes, isLoading: isRecipesLoading, isError: isRecipesError, error: recipeError } = useFetch('allRecipes', '/v1/recipes');
  const { data: likedRecipes, isLoading: isLikedRecipesLoading, isError: isLikedRecipesError, error: likedRecipesError } = useFetch('likedRecipes', '/v1/users-liked-recipes');

  if (!isRecipesLoading && recipes && !isLikedRecipesLoading && likedRecipes) {
    likedRecipes.data.forEach((likedRecipe: LikedRecipeProps) => {
      recipes.data.forEach((recipe: RecipeProps) => {

      });
    });
  }

  return (
    <RecipesContainer>
      <RecipesWrapper>
        {
          isRecipesLoading ? <p>Carregando receitas...</p>
            : recipes && recipes.data ? recipes.data.map((recipe: RecipeProps) => (
              <Recipe key={recipe.id} recipe={recipe} />
            )) : (
              <NoRecipes>
                <img src={crying} alt="" />
                <p>Sem receitas criadas</p>
              </NoRecipes>
            )
        }
      </RecipesWrapper>
    </RecipesContainer>
  );
}